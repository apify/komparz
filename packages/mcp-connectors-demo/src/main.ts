import { Actor, log } from 'apify';

import { createMcpClient } from './utils.js';

await Actor.init();

const mcpProxyUrl = process.env.APIFY_MCP_PROXY_URL;
if (!mcpProxyUrl) throw new Error('Missing APIFY_MCP_PROXY_URL env variable');

type Input = {
    apifyMcpConnector: string;
    url: string;
    notionMcpConnector?: string;
    notionPageId?: string;
}

const input = await Actor.getInputOrThrow<Input>();
const token = process.env.APIFY_TOKEN!;

// Collect process details for the Notion debug section
const processLog: string[] = [];

const formatToolList = (tools: { name: string; annotations?: Record<string, unknown> }[]) =>
    tools.map((t) => {
        const title = t.annotations?.title ?? '';
        return `- **${t.name}**${title ? ` — ${title}` : ''}`;
    }).join('\n');

// ─── Step 1: Connect to Apify MCP server ────────────────────────────────────

log.info('Connecting to Apify MCP server...');
const apifyMcp = await createMcpClient(mcpProxyUrl, input.apifyMcpConnector, token);

const apifyTools = await apifyMcp.listTools();
for (const tool of apifyTools.tools) {
    const args = tool.inputSchema && 'properties' in tool.inputSchema
        ? Object.keys(tool.inputSchema.properties as Record<string, unknown>).join(', ')
        : '';
    const hints = tool.annotations
        ? Object.entries(tool.annotations)
            .filter(([k, v]) => v !== undefined && k !== 'title')
            .map(([k, v]) => `${k}=${v}`).join(', ')
        : '';
    const title = tool.annotations && 'title' in tool.annotations ? tool.annotations.title : '';
    log.info(`  ${tool.name}(${args})\n          ${title ? `${title} | ` : ''}${hints}`);
}

processLog.push(`## Apify MCP Server\n\nConnected to \`${mcpProxyUrl}/${input.apifyMcpConnector}\`\n\n### Available tools (${apifyTools.tools.length})\n\n${formatToolList(apifyTools.tools)}`);

// ─── Step 2: Run a web scraper via Apify MCP ────────────────────────────────

log.info('Starting web scraper Actor via Apify MCP...');
const scrapeResult = await apifyMcp.callTool(
    {
        name: 'call-actor',
        arguments: {
            actor: 'apify/website-content-crawler',
            input: {
                startUrls: [{ url: input.url }],
                maxCrawlPages: 1,
                proxyConfiguration: { useApifyProxy: true },
            },
        },
    },
    undefined,
    { timeout: 5 * 60 * 1000 }, // 5 minutes — the Actor run may take a while
);

log.info('Scrape completed!');

// ─── Step 3: Extract dataset ID and fetch output ────────────────────────────

const scrapeContent = scrapeResult.content as { type: string; text: string }[];
const summaryText = scrapeContent.find((c) => c.text.includes('Dataset ID'))?.text ?? '';
const datasetId = summaryText.match(/Dataset ID:\s*(\S+)/)?.[1];
const runId = summaryText.match(/Run ID:\s*(\S+)/)?.[1];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let scrapedItems: any[] = [];

if (!datasetId) {
    log.error('Could not extract dataset ID from call-actor response');
    log.info('Raw response:', { content: scrapeContent.map((c) => c.text.slice(0, 500)) });
    processLog.push(`## Scrape\n\nFailed to extract dataset ID from call-actor response.`);
} else {
    log.info(`Fetching output from dataset ${datasetId}...`);
    const outputResult = await apifyMcp.callTool({
        name: 'get-actor-output',
        arguments: {
            datasetId,
            limit: 1
        },
    });

    const outputContent = outputResult.content as { type: string; text: string }[];
    for (const item of outputContent) {
        const cleaned = item.text.replace(/^```(?:json)?\n?/gm, '').replace(/```$/gm, '').trim();
        try {
            const parsed = JSON.parse(cleaned);
            scrapedItems = Array.isArray(parsed) ? parsed : [parsed];
            log.info(`Output:\n${JSON.stringify(parsed, null, 2)}`);
        } catch {
            log.info(`Output: ${item.text}`);
        }
    }

    const pageTitles = scrapedItems.map((item) => `- ${item.metadata?.title ?? item.url ?? 'Untitled'}`).join('\n');
    processLog.push(`## Scrape\n\nCrawled \`${input.url}\` using \`call-actor(apify/website-content-crawler)\`\n\n- **Run ID:** \`${runId}\`\n- **Dataset ID:** \`${datasetId}\`\n- **Items fetched:** ${scrapedItems.length}\n\n### Pages scraped\n\n${pageTitles}`);
}

// ─── Step 4 (optional): Export markdown to Notion ───────────────────────────

if (input.notionMcpConnector && input.notionPageId && scrapedItems.length > 0) {
    log.info('Connecting to Notion MCP server...');
    const notionMcp = await createMcpClient(mcpProxyUrl, input.notionMcpConnector, token);

    const notionTools = await notionMcp.listTools();
    for (const tool of notionTools.tools) {
        const args = tool.inputSchema && 'properties' in tool.inputSchema
            ? Object.keys(tool.inputSchema.properties as Record<string, unknown>).join(', ')
            : '';
        log.info(`  ${tool.name}(${args})`);
    }

    processLog.push(`## Notion MCP Server\n\nConnected to \`${mcpProxyUrl}/${input.notionMcpConnector}\`\n\n### Available tools (${notionTools.tools.length})\n\n${formatToolList(notionTools.tools)}`);

    // Build page content: scraped markdown + collapsible process log
    const debugSection = [
        '',
        '---',
        '',
        '<details>',
        '<summary>Process details</summary>',
        '',
        processLog.join('\n\n---\n\n'),
        '',
        '</details>',
    ].join('\n');

    const pages = scrapedItems.map((item) => ({
        properties: { title: item.metadata?.title ?? item.url ?? 'Untitled' },
        content: (item.markdown ?? item.text ?? '') + debugSection,
    }));

    log.info(`Creating ${pages.length} pages in Notion...`);
    const createResult = await notionMcp.callTool({
        name: 'notion-create-pages',
        arguments: {
            parent: { page_id: input.notionPageId, type: 'page_id' },
            pages,
        },
    });

    const createContent = createResult.content as { type: string; text: string }[];
    for (const item of createContent) {
        log.info(`Notion response: ${item.text.slice(0, 500)}`);
    }

    log.info('All results exported to Notion!');
    await notionMcp.close();
} else if (input.notionMcpConnector || input.notionPageId) {
    log.warning('Notion export skipped — both notionMcpConnector and notionPageId are required');
}

// ─── Cleanup ────────────────────────────────────────────────────────────────

await apifyMcp.close();
await Actor.exit();
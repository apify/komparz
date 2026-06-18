import { Actor, log } from 'apify';

import { createMcpClient } from './utils.js';

await Actor.init();

const mcpProxyUrl = process.env.APIFY_MCP_PROXY_URL;
if (!mcpProxyUrl) throw new Error('Missing APIFY_MCP_PROXY_URL env variable');

const token = process.env.APIFY_TOKEN!;

type Input = {
    mcpConnector: string;
};

const { mcpConnector } = await Actor.getInputOrThrow<Input>();

log.info('Connecting to MCP server...', { mcpConnector });
const client = await createMcpClient(mcpProxyUrl, mcpConnector, token);

const { tools: rawTools } = await client.listTools();

const tools = rawTools.map((tool) => ({
    name: tool.name,
    title: tool.annotations?.title ?? undefined,
    description: tool.description,
    inputSchema: tool.inputSchema,
}));

const result = {
    connectorId: mcpConnector,
    toolCount: tools.length,
    tools,
};

await Actor.setValue('OUTPUT', result);

log.info(`Found ${tools.length} tools on connector "${mcpConnector}"`);

await client.close();
await Actor.exit();

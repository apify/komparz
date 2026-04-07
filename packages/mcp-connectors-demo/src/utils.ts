import { log } from 'apify';

import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';

export const createMcpClient = async (mcpProxyUrl: string, connectorId: string, token: string) => {
    const url = `${mcpProxyUrl}/${connectorId}`;
    log.info('Connecting to MCP endpoint', { url });

    const transport = new StreamableHTTPClientTransport(new URL(url), {
        requestInit: {
            headers: { Authorization: `Bearer ${token}` },
        },
    });

    const client = new Client({ name: 'apify-mcp-demo', version: '1.0.0' });
    await client.connect(transport);

    return client;
};
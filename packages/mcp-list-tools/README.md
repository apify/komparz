# MCP List Tools

Lists all tools available on an MCP connector and saves them as a JSON record to the key-value store.

## Input

| Field | Type | Description |
|-------|------|-------------|
| `mcpConnector` | MCP Connector | The MCP connector whose tools you want to list. Works with any MCP server. |

## Output

A single JSON record saved to the key-value store under the key `OUTPUT`:

```json
{
  "connectorId": "abc123",
  "toolCount": 3,
  "tools": [
    {
      "name": "call-actor",
      "title": "Call Actor",
      "description": "Runs an Apify Actor and returns its output.",
      "inputSchema": { ... }
    }
  ]
}
```

The record is accessible via the **Tools** link in the Actor run output.

#!/bin/bash

# Download input
echo "Downloading input..."
curl -s --header "Authorization: Bearer ${APIFY_TOKEN}" \
    "${APIFY_API_BASE_URL}v2/key-value-stores/${ACTOR_DEFAULT_KEY_VALUE_STORE_ID}/records/${ACTOR_INPUT_KEY}" > INPUT.json
# Parse the connector ID
CONNECTOR_ID=$(cat INPUT.json | jq -r .mcpConnector)

# Connect using mcpc
mcpc connect "${APIFY_MCP_PROXY_URL}/${CONNECTOR_ID}" @test  --header "Authorization: Bearer ${APIFY_TOKEN}"

# List tools
mcpc --json @test tools-list > tools-list.json

# Save the tools to the output
curl -X PUT --header "Authorization: Bearer ${APIFY_TOKEN}" \
    --header "Content-Type: application/json" \
    -d @tools-list.json \
    "${APIFY_API_BASE_URL}v2/key-value-stores/${ACTOR_DEFAULT_KEY_VALUE_STORE_ID}/records/OUTPUT"

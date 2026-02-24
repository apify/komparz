#!/bin/sh

echo "Contents of ACTOR_STORAGES_JSON environment variable:"

echo $ACTOR_STORAGES_JSON | jq

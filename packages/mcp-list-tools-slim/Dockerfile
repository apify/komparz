FROM oven/bun:alpine

RUN apk upgrade --update-cache --available && apk add --no-cache curl jq bash && rm -rf /var/cache/apk/*

RUN bun install -g @apify/mcpc

COPY src ./

CMD ["bash", "main.sh"]

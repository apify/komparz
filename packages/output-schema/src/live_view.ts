import { createServer, type Server } from "node:http";
import { setTimeout as delay } from "node:timers/promises";

import { Actor, log } from "apify";

const renderTimePage = (): string => {
    const time = new Date().toLocaleString("en-US", {
        hour12: false,
        dateStyle: "full",
        timeStyle: "long",
    });
    return `<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="refresh" content="1">
    <title>Live view — current time</title>
    <style>
        html, body { height: 100%; margin: 0; }
        body {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            background: #0f172a;
            color: #f8fafc;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
        .time {
            font-size: 3rem;
            font-variant-numeric: tabular-nums;
            text-align: center;
            padding: 0 2rem;
        }
        button {
            font: inherit;
            font-size: 1rem;
            padding: 0.7rem 1.4rem;
            border-radius: 0.5rem;
            border: 1px solid #ef4444;
            background: transparent;
            color: #fecaca;
            cursor: pointer;
        }
        button:hover { background: #ef4444; color: #fff; }
        button:disabled { opacity: 0.5; cursor: progress; }
    </style>
</head>
<body>
    <div class="time" id="time">${time}</div>
    <form id="exit-form" method="post" action="/exit">
        <button type="submit" id="exit-btn">Stop Actor</button>
    </form>
    <script>
        document.getElementById('exit-form').addEventListener('submit', async (event) => {
            event.preventDefault();
            document.querySelector('meta[http-equiv="refresh"]')?.remove();
            const btn = document.getElementById('exit-btn');
            btn.disabled = true;
            btn.textContent = 'Stopping…';
            try {
                await fetch('/exit', { method: 'POST' });
            } catch {}
            document.getElementById('time').textContent = 'Actor exiting…';
            btn.remove();
        });
    </script>
</body>
</html>
`;
};

export const startLiveView = (): Server => {
    const port = Number(process.env.ACTOR_WEB_SERVER_PORT) || 4321;
    const server = createServer((req, res) => {
        if (req.method === "GET" && (req.url === "/" || req.url?.startsWith("/?"))) {
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            res.end(renderTimePage());
            return;
        }
        if (req.method === "POST" && req.url === "/exit") {
            res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
            res.end(JSON.stringify({ status: "exiting" }));
            log.info("Received /exit request — shutting down.");
            setImmediate(async () => {
                server.close();
                await delay(200);
                await Actor.exit();
            });
            return;
        }
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end("Not Found");
    });
    server.listen(port, () => {
        log.info(`Live view web server listening on port ${port}.`);
    });

    Actor.on("aborting", async () => {
        log.info("Aborting — closing web server.");
        server.close();
        await delay(1000);
        await Actor.exit();
    });

    return server;
};

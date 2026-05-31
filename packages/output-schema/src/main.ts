import { setTimeout as delay } from "node:timers/promises";

import { Actor, log } from "apify";

import { startLiveView } from "./live_view.js";
import { pushDatasets, writeKeyValueFiles } from "./writes.js";

interface Input {
    /** Seconds to wait after run start before the live view becomes available (0 = no delay). */
    liveViewDelaySecs?: number;
    /** Total run-time cap in seconds, measured from run start (0 = run indefinitely). */
    maxRunTimeSecs?: number;
}

await Actor.init();

const input = (await Actor.getInput<Input>()) ?? {};
const liveViewDelaySecs = Math.max(0, Math.trunc(input.liveViewDelaySecs ?? 0));
const maxRunTimeSecs = Math.max(0, Math.trunc(input.maxRunTimeSecs ?? 0));

// Schedule the automatic stop from run start. When 0, the Actor keeps the historical
// behavior of running forever until the user hits Stop in the live view or aborts the run.
if (maxRunTimeSecs > 0) {
    if (liveViewDelaySecs >= maxRunTimeSecs) {
        log.warning(
            `Live view delay (${liveViewDelaySecs}s) is greater than or equal to the auto-stop timeout ` +
                `(${maxRunTimeSecs}s) — the Actor will stop before the live view becomes available.`,
        );
    }
    log.info(`Actor will stop automatically ${maxRunTimeSecs}s after start.`);
    // Not unref()'d on purpose: this timer is what keeps the process alive until the limit is hit.
    setTimeout(() => {
        log.info(`Reached the ${maxRunTimeSecs}s run-time limit — stopping.`);
        void Actor.exit();
    }, maxRunTimeSecs * 1000);
}

// Produce the output first so it is ready regardless of any live-view delay.
const fileCount = await writeKeyValueFiles();
log.info(`Stored ${fileCount} files in the default key-value store.`);

await pushDatasets();

// Optionally hold off on exposing the live view.
if (liveViewDelaySecs > 0) {
    log.info(`Waiting ${liveViewDelaySecs}s before starting the live view…`);
    await delay(liveViewDelaySecs * 1000);
}

startLiveView();

log.info(
    maxRunTimeSecs > 0
        ? `Writes complete. Live view is up — it will close after the ${maxRunTimeSecs}s limit, or when you Stop/abort the run.`
        : "Writes complete. Live view is still up — abort the run or press Stop to exit.",
);

// Keep the actor running to allow viewing the live view.
await new Promise(() => {});

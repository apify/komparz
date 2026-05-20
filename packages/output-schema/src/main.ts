import { Actor, log } from "apify";

import { startLiveView } from "./live_view.js";
import { pushDatasets, writeKeyValueFiles } from "./writes.js";

await Actor.init();

startLiveView();

const fileCount = await writeKeyValueFiles();
log.info(`Stored ${fileCount} files in the default key-value store.`);

await pushDatasets();

log.info("Writes complete. Live view is still up — abort the run to exit.");

// Keep the actor running to allow viewing the live view.
await new Promise(() => {});

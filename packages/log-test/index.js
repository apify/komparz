// Kudos to Pepa

const Apify = require('apify');

const sleep = (seconds) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  })
}

Apify.main(async () => {
  const {logDelaySeconds} = await Apify.getInput();

  if (!logDelaySeconds) {
    Apify.utils.log.error('No log delay provided.');
    process.exit(1);
  }

  const keepRunning = true;
  let counter = 0;

  while(keepRunning) {
    Apify.utils.log.info(`${counter}`);
    counter += 1;
    await sleep(logDelaySeconds);
  }
});

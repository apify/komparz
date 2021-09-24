const Apify = require('apify');

Apify.main(async () => {
  const { actorNo } =  await Apify.getInput();
  const dataset = await Apify.openDataset('concurrency-testing-dataset');
  for (var i = 0; i < 100; i++) {
    await dataset.pushData({ actorNo, date: new Date() });
  }
});

const Apify = require('apify');
const sleep = (ms) => new Promise(resolve => setTimeout(() => resolve(), ms))

Apify.main(async () => {
  const queue = await Apify.openRequestQueue();
  const queueWithName = await Apify.openRequestQueue('namedQueue');

  const dataset = await Apify.openDataset();
  const datasetWithName = await Apify.openDataset('namedDataset');

  const store = await Apify.openKeyValueStore()
  const storeWithName = await Apify.openKeyValueStore('namedStore');

  for(let i = 0; i < 10; i++) {
    await sleep(100);
    await queue.addRequest({ url: 'http://example.com/' + i });
    await queueWithName.addRequest({ url: 'http://example.com/named-' + i });
    await dataset.pushData({ foo: 'bar-' + i });
    await datasetWithName.pushData({ foo: 'bar-' + i });
    await store.setValue('bar-' + i, { foo: 'bar-' + i });
    await storeWithName.setValue('bar-' + i, { foo: 'bar-' + i });
  }
});

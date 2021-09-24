// Kudos to Pepa

const Apify = require('apify');

const sleep = (ms) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
}

Apify.main(async () => {
  // Open a named key-value store
  const store = await Apify.openKeyValueStore('dynamodb-key-value-store-check-001');
  Apify.utils.log.info('Store', {url: store.getPublicUrl()});
  for(let i = 0; i < 10000; i++) {
    await sleep(2000);
    const key = `some-key-${i}`;
    Apify.utils.log.info('Processing key', {key});

    // Write a record. JavaScript object is automatically converted to JSON,
    // strings and binary buffers are stored as they are
    await store.setValue(key, { foo: 'bar' });

    // Read a record. Note that JSON is automatically parsed to a JavaScript object,
    // text data returned as a string and other data is returned as binary buffer
    const value = await store.getValue(key);

    await store.setValue(key, null);

  }

});

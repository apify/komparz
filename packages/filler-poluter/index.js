const Apify = require('apify');

Apify.main(async () => {
  for(let i = 5; i < 20; i++) {
    const storeName = `test-store-${i}`;
    const store = await Apify.openKeyValueStore(storeName);
    for(let j = 0; j < 3000; j++) {
      await store.setValue(`test-key-${j}`, 'testValue');
    }
  }
});

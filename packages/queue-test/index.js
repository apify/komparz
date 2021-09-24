// Kudos to Pepa

const Apify = require('apify');

const sleep = (ms) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
}

Apify.main(async () => {
  const requestQueue = await Apify.openRequestQueue();
  const info = await requestQueue.getInfo();
  Apify.utils.log.info('Queue', info);
  for(let i = 0; i < 10000; i++) {
    await sleep(2000);
    await requestQueue.addRequest({url: `https://www.apify.com/${i}-page`});
    const request = await requestQueue.fetchNextRequest();
    Apify.utils.log.info('Request', request);
    await requestQueue.markRequestHandled(request);
  }
});

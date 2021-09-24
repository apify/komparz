// Kudos to Pepa

const Apify = require('apify');

const sleep = (ms) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), ms);
  });
}

Apify.main(async () => {
  const dataset = await Apify.openDataset();
  for(let i = 0; i < 5; i++) {
    await sleep(100);
    const item = new Array(1024 * 4).fill(0).reduce((r, item, index) => {r[`col-${index}`] = index; return r;},  {});
    await dataset.pushData(item);
  }
});

// Import Apify SDK. For more information, see https://sdk.apify.com/
const Apify = require('apify');
const fsPromises = require('fs').promises;
const prb = require('pseudo-random-buffer')
const randomBytes = prb('a seed')
const _ = require('underscore');

Apify.main(async () => {
  while (true) {
    console.log('writing');
    const buffer = randomBytes(25 * 1024 * 1024);
    const promises = _.range(0, 500).map((i) => fsPromises.writeFile(`./my-file-${i}`, buffer));
    await Promise.all(promises);
  }
});

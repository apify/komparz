const Apify = require('apify');

Apify.main(async () => {
  await Apify.utils.sleep(30 * 60 * 1000); // 30m
});

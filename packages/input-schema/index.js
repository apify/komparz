const Apify = require('apify');

Apify.main(async () => {
  console.log(await Apify.getValue('INPUT'));
});

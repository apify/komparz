// Kudos to Kuba
// https://my-securitybyobscurity.apify.com/admin/users/uFX72X8GNfNBo7QwC/actors/MwACil0Dx5SUnzJSK#/

const Apify = require('apify');
const _ = require('underscore');

const item = {
  "fruits": [ "apple", "orange", "pear" ],
  "vegetables": [
    {
      "veggieName": "potato",
      "veggieLike": true
    },
    {
      "veggieName": "broccoli",
      "veggieLike": false
    }
  ]
}
Apify.main(async () => {
  const items = _.times(3000, () => item);
  // Pushing 3000k items as once
  for(let i = 0; i < 5; i++) {
    const key = `3k items ${i+1}`;
    console.time(key)
    await Apify.pushData(items);
    console.timeEnd(key);
  }

  // Pushing 3k items one by one
  for(let i = 0; i < 2; i++) {
    const key = `3k items one by one ${i+1}`;
    console.time(key)
    for (let item of items) {
      await Apify.pushData(item);
    }
    console.timeEnd(key);
  }

  // Pushing 3k in parallel
  console.time('3k parallel')
  await Promise.all(_.times(5, () => Apify.pushData(items)));
  console.timeEnd('3k parallel');
});

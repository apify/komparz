const Apify = require('apify');

Apify.main(async () => {
  let counter = 0
  while(true) {
    counter++
    console.log(`${counter}: Random ${Math.random()}`)
    await new Promise(resolve => setTimeout(resolve, 100));
  }
});

import { Actor } from 'apify';
await Actor.init();


await Actor.setValue('OUTPUT.json', { message: "Hello world."});

await Actor.setValue('record-1.json', {r: 1});
await Actor.setValue('record-2.json', {r: 2});
await Actor.setValue('record-3.json', {r: 3});
await Actor.setValue('record-4.json', {r: 4});

await Actor.setValue('OUTPUT.html', '<h1>Hello world.</h1><p>Invalid html is fine...</p>', {contentType: 'text/html'})

await Actor.exit();

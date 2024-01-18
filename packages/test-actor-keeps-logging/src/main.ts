import { Actor, log } from 'apify';

await Actor.init();

let n = 0;
while(true) {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    log.info(`${n} bottles of beer on the wall. ${n} bottles of beer. Put one up, ${n} bottles of beer on the wall.`)
    n++;
}
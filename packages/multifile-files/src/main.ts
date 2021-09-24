import Apify from "apify";

import constants from "./constants";

const {
    utils: { log },
} = Apify;

Apify.main(async () => {
    log.info('PHASE -- STARTING ACTOR.');

    const userInput = await Apify.getInput();
    log.info('ACTOR OPTIONS: -- ', userInput);

    log.info('PHASE -- ACTOR FINISHED.');
});

import { Actor } from 'apify';

await Actor.init();

interface Input {
    actorId: string;
    actorInput: object;
}

const input = await Actor.getInput<Input>();
if (!input) throw new Error("Input is missing!");

const { actorId, actorInput } = input;

await Actor.call(actorId, actorInput);

await Actor.exit();

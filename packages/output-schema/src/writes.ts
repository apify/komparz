import { Actor, log } from "apify";

import {
    makeArchive,
    makeLargeJson,
    makeLargeMarkdown,
    makePhoto,
    makeScreenshot,
    makeSmallHtml,
    makeSmallJson,
    makeSmallMarkdown,
    makeSmallTxt,
    pad,
    TOPICS,
} from "./payloads.js";

// Keys include their file extension so the Apify SDK matches `mime.contentType(key)`
// to the supplied `contentType` and writes the local file with the right extension.

export const writeKeyValueFiles = async (): Promise<number> => {
    const writes: Promise<void>[] = [];

    // 10 JSON ideas + 10 JSON plans (one large in each group).
    for (let i = 1; i <= 10; i++) {
        const content = i === 1 ? makeLargeJson(i, "idea") : makeSmallJson(i, "idea");
        writes.push(Actor.setValue(`idea-${pad(i)}.json`, content, { contentType: "application/json" }));
    }
    for (let i = 1; i <= 10; i++) {
        const content = i === 1 ? makeLargeJson(i, "plan") : makeSmallJson(i, "plan");
        writes.push(Actor.setValue(`plan-json-${pad(i)}.json`, content, { contentType: "application/json" }));
    }

    // 10 markdown ideas (indices 11..20) + 10 markdown plans (one large in each group).
    for (let i = 11; i <= 20; i++) {
        const content = i === 11 ? makeLargeMarkdown(i, "idea") : makeSmallMarkdown(i, "idea");
        writes.push(Actor.setValue(`idea-${pad(i)}.md`, content, { contentType: "text/markdown" }));
    }
    for (let i = 1; i <= 10; i++) {
        const content = i === 1 ? makeLargeMarkdown(i, "plan") : makeSmallMarkdown(i, "plan");
        writes.push(Actor.setValue(`plan-md-${pad(i)}.md`, content, { contentType: "text/markdown" }));
    }

    // 10 HTML files in the plans collection.
    for (let i = 1; i <= 10; i++) {
        writes.push(Actor.setValue(`plan-html-${pad(i)}.html`, makeSmallHtml(i), { contentType: "text/html" }));
    }

    // 10 plain text files in the plans collection.
    for (let i = 1; i <= 10; i++) {
        writes.push(Actor.setValue(`plan-txt-${pad(i)}.txt`, makeSmallTxt(i), { contentType: "text/plain" }));
    }

    // 20 PNG screenshots + 20 JPEG photos — each in a different color.
    for (let i = 1; i <= 20; i++) {
        const png = await makeScreenshot(i);
        writes.push(Actor.setValue(`screenshot-${pad(i)}.png`, png, { contentType: "image/png" }));
    }
    for (let i = 1; i <= 20; i++) {
        const jpeg = await makePhoto(i);
        writes.push(Actor.setValue(`photo-${pad(i)}.jpg`, jpeg, { contentType: "image/jpeg" }));
    }

    // 1 binary archive (zip) — browsers download instead of rendering.
    writes.push(Actor.setValue("archive-01.zip", await makeArchive(), { contentType: "application/zip" }));

    await Promise.all(writes);
    return writes.length;
};

export const pushDatasets = async (): Promise<void> => {
    const defaultKvStoreId = (await Actor.openKeyValueStore()).id;
    const kvRecordUrl = (key: string): string =>
        `https://api.apify.com/v2/key-value-stores/${defaultKvStoreId}/records/${key}`;

    // Validated plans dataset (default) — items follow plans_dataset_schema.json.
    const planItems = Array.from({ length: 8 }, (_, idx) => {
        const i = idx + 1;
        const topic = TOPICS[i % TOPICS.length];
        const attachmentCount = (i % 3) + 1;
        return {
            id: `plan-${pad(i)}`,
            title: `${topic} plan ${i}`,
            score: 50 + i * 5,
            published: i % 2 === 0,
            createdAt: new Date(2026, 0, i).toISOString(),
            homepageUrl: `https://example.com/plans/${pad(i)}`,
            coverImage: kvRecordUrl(`screenshot-${pad(i)}.png`),
            tags: ["demo", `q${Math.ceil(i / 3)}`, topic.toLowerCase()],
            metadata: { topic, priority: i <= 3 ? "high" : "normal", revision: i },
            relatedPlanUrl: kvRecordUrl(`plan-md-${pad(i)}.md`),
            attachments: Array.from({ length: attachmentCount }, (_, a) => {
                const photoIndex = ((i + a) % 20) + 1;
                return {
                    imageUrl: kvRecordUrl(`photo-${pad(photoIndex)}.jpg`),
                    caption: `${topic} — view ${a + 1}`,
                };
            }),
        };
    });
    await Actor.pushData(planItems);
    log.info(`Pushed ${planItems.length} items into the default (plans) dataset.`);

    // Named ideas dataset — no schema, so items can carry a few extra fields each.
    const ideasDataset = await Actor.openDataset({ alias: "categories" });
    const ideaItems = Array.from({ length: 8 }, (_, idx) => {
        const i = idx + 1;
        const topic = TOPICS[i % TOPICS.length];
        const base = {
            id: `idea-${pad(i)}`,
            title: `${topic} idea ${i}`,
            votes: 10 + i * 3,
            createdAt: new Date(2026, 0, i).toISOString(),
            author: i % 2 === 0 ? "design" : "engineering",
        };
        const extras: Record<string, unknown>[] = [
            { stage: "draft" },
            { effort: "S", roi: "high" },
            { linkedPlan: `plan-${pad(i)}` },
            { tags: ["ux", topic.toLowerCase()] },
            { reviewers: ["alice", "bob"] },
            { stats: { views: i * 11, shares: i } },
            { note: `Quick sketch from ${topic} sync.` },
            { blocked: false },
        ];
        return { ...base, ...extras[idx % extras.length] };
    });
    await ideasDataset.pushData(ideaItems);
    log.info(`Pushed ${ideaItems.length} items into the named "ideas" dataset.`);
};

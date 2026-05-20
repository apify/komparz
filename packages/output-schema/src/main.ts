import { Actor, log } from "apify";
import sharp from "sharp";

await Actor.init();

const TOPICS = [
    "Atlas",
    "Borealis",
    "Cinder",
    "Drift",
    "Ember",
    "Flux",
    "Glacier",
    "Horizon",
    "Iris",
    "Juniper",
    "Kestrel",
    "Lumen",
    "Mirage",
    "Nimbus",
    "Onyx",
    "Pulse",
    "Quartz",
    "Rift",
    "Sable",
    "Tide",
];

const makeSmallJson = (index: number, group: string): string =>
    JSON.stringify(
        {
            id: `${group}-${index}`,
            title: `${TOPICS[index % TOPICS.length]} ${group} ${index}`,
            index,
            group,
            createdAt: new Date(2026, 0, index).toISOString(),
            tags: ["demo", group, TOPICS[index % TOPICS.length].toLowerCase()],
        },
        null,
        2,
    );

const makeSmallMarkdown = (index: number, group: string): string => {
    const topic = TOPICS[index % TOPICS.length];
    return [
        `# ${topic} ${group} #${index}`,
        "",
        `This document describes the **${topic}** entry in the *${group}* collection.`,
        "",
        "## Highlights",
        "",
        `- Index: ${index}`,
        `- Group: ${group}`,
        `- Topic: ${topic}`,
        "",
        "> Generated automatically as placeholder content.",
        "",
    ].join("\n");
};

const makeSmallHtml = (index: number): string => {
    const topic = TOPICS[index % TOPICS.length];
    return [
        "<!doctype html>",
        '<html lang="en">',
        "<head>",
        `    <title>${topic} #${index}</title>`,
        "</head>",
        "<body>",
        `    <h1>${topic} #${index}</h1>`,
        `    <p>Placeholder HTML document number ${index}.</p>`,
        "</body>",
        "</html>",
        "",
    ].join("\n");
};

const makeSmallTxt = (index: number): string => {
    const topic = TOPICS[index % TOPICS.length];
    return `Plain text document #${index} — topic: ${topic}.\nGenerated as placeholder content.\n`;
};

const makeLargeJson = (index: number, group: string): string => {
    const fields: Record<string, string | number | boolean> = {
        id: `${group}-large-${index}`,
        group,
        index,
        createdAt: new Date(2026, 0, index).toISOString(),
    };
    for (let f = 0; f < 30000; f++) {
        const topic = TOPICS[f % TOPICS.length];
        fields[`field_${String(f).padStart(5, "0")}`] = `${topic.toLowerCase()}-${group}-${f}`;
    }
    return JSON.stringify(fields, null, 2);
};

const makeLargeMarkdown = (index: number, group: string): string => {
    const sections: string[] = [
        `# Large ${group} report #${index}`,
        "",
        `Auto-generated reference document for the **${group}** collection (entry #${index}).`,
        "",
        "## Table of contents",
        "",
    ];
    const sectionCount = 2500;
    for (let s = 1; s <= sectionCount; s++) {
        sections.push(`- [Section ${s}](#section-${s})`);
    }
    sections.push("");
    for (let s = 1; s <= sectionCount; s++) {
        const topic = TOPICS[s % TOPICS.length];
        sections.push(
            `## Section ${s}`,
            "",
            `Discussion of **${topic}** in the context of *${group}* entry #${index}.`,
            "",
            "### Key points",
            "",
            `- Point one about ${topic.toLowerCase()}.`,
            `- Point two about ${topic.toLowerCase()} interactions.`,
            `- Point three referencing entry ${index}.`,
            "",
            "### Example",
            "",
            "```ts",
            `const ${topic.toLowerCase()} = { section: ${s}, index: ${index} };`,
            "```",
            "",
            `> Note: section ${s} is generated content — \`${topic}\` is just a label.`,
            "",
            "| Field | Value |",
            "| ----- | ----- |",
            `| topic | ${topic} |`,
            `| section | ${s} |`,
            `| index | ${index} |`,
            "",
        );
    }
    return sections.join("\n");
};

const hueForIndex = (index: number, total: number): number => Math.round((360 * (index - 1)) / total);
const hslToRgb = (h: number, s: number, l: number): { r: number; g: number; b: number } => {
    const a = (s * Math.min(l, 1 - l)) / 100;
    const f = (n: number): number => {
        const k = (n + h / 30) % 12;
        return Math.round(255 * (l / 100 - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))));
    };
    return { r: f(0), g: f(8), b: f(4) };
};

const makeScreenshot = async (index: number): Promise<Buffer> => {
    const { r, g, b } = hslToRgb(hueForIndex(index, 20), 70, 55);
    return sharp({
        create: { width: 128, height: 128, channels: 4, background: { r, g, b, alpha: 1 } },
    })
        .png()
        .toBuffer();
};

const makePhoto = async (index: number): Promise<Buffer> => {
    const { r, g, b } = hslToRgb(hueForIndex(index, 20) + 18, 65, 50);
    return sharp({ create: { width: 128, height: 128, channels: 3, background: { r, g, b } } })
        .jpeg({ quality: 80 })
        .toBuffer();
};

const pad = (n: number): string => String(n).padStart(2, "0");
const writes: Promise<void>[] = [];

// 10 JSON ideas + 10 JSON plans (one large in each group).
for (let i = 1; i <= 10; i++) {
    const content = i === 1 ? makeLargeJson(i, "idea") : makeSmallJson(i, "idea");
    writes.push(Actor.setValue(`idea-${pad(i)}`, content, { contentType: "application/json" }));
}
for (let i = 1; i <= 10; i++) {
    const content = i === 1 ? makeLargeJson(i, "plan") : makeSmallJson(i, "plan");
    writes.push(Actor.setValue(`plan-json-${pad(i)}`, content, { contentType: "application/json" }));
}

// 10 markdown ideas (indices 11..20) + 10 markdown plans (one large in each group).
// The `.md` key suffix matches `mime.contentType` so the SDK saves locally as `*.md`, not `*.markdown`.
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
    writes.push(Actor.setValue(`plan-html-${pad(i)}`, makeSmallHtml(i), { contentType: "text/html" }));
}

// 10 plain text files in the plans collection.
for (let i = 1; i <= 10; i++) {
    writes.push(Actor.setValue(`plan-txt-${pad(i)}`, makeSmallTxt(i), { contentType: "text/plain" }));
}

// 20 PNG screenshots + 20 JPEG photos — each in a different color.
for (let i = 1; i <= 20; i++) {
    const png = await makeScreenshot(i);
    writes.push(Actor.setValue(`screenshot-${pad(i)}`, png, { contentType: "image/png" }));
}
for (let i = 1; i <= 20; i++) {
    const jpeg = await makePhoto(i);
    writes.push(Actor.setValue(`photo-${pad(i)}`, jpeg, { contentType: "image/jpeg" }));
}

await Promise.all(writes);

log.info(`Stored ${writes.length} files in the default key-value store.`);

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
        coverImage: kvRecordUrl(`screenshot-${pad(i)}`),
        tags: ["demo", `q${Math.ceil(i / 3)}`, topic.toLowerCase()],
        metadata: { topic, priority: i <= 3 ? "high" : "normal", revision: i },
        relatedPlanUrl: kvRecordUrl(`plan-md-${pad(i)}.md`),
        attachments: Array.from({ length: attachmentCount }, (_, a) => {
            const photoIndex = ((i + a) % 20) + 1;
            return {
                imageUrl: kvRecordUrl(`photo-${pad(photoIndex)}`),
                caption: `${topic} — view ${a + 1}`,
            };
        }),
    };
});
await Actor.pushData(planItems);
log.info(`Pushed ${planItems.length} items into the default (plans) dataset.`);

// Named "ideas" dataset — no schema, so items can carry a few extra fields each.
const ideasDataset = await Actor.openDataset("ideas");
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
    // Sprinkle a small per-item extra to show no-schema flexibility.
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

await Actor.exit();

import JSZip from "jszip";
import sharp from "sharp";

export const TOPICS = [
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

export const pad = (n: number): string => String(n).padStart(2, "0");

export const makeSmallJson = (index: number, group: string): string =>
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

export const makeSmallMarkdown = (index: number, group: string): string => {
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

export const makeSmallHtml = (index: number): string => {
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

export const makeSmallTxt = (index: number): string => {
    const topic = TOPICS[index % TOPICS.length];
    return `Plain text document #${index} — topic: ${topic}.\nGenerated as placeholder content.\n`;
};

export const makeLargeJson = (index: number, group: string): string => {
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

export const makeLargeMarkdown = (index: number, group: string): string => {
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

export const makeScreenshot = async (index: number): Promise<Buffer> => {
    const { r, g, b } = hslToRgb(hueForIndex(index, 20), 70, 55);
    return sharp({
        create: { width: 128, height: 128, channels: 4, background: { r, g, b, alpha: 1 } },
    })
        .png()
        .toBuffer();
};

export const makePhoto = async (index: number): Promise<Buffer> => {
    const { r, g, b } = hslToRgb(hueForIndex(index, 20) + 18, 65, 50);
    return sharp({ create: { width: 128, height: 128, channels: 3, background: { r, g, b } } })
        .jpeg({ quality: 80 })
        .toBuffer();
};

export const makeArchive = async (): Promise<Buffer> => {
    const zip = new JSZip();
    zip.file("readme.txt", "Placeholder archive generated by the Actor.\n");
    zip.file("topics.json", JSON.stringify({ generatedAt: new Date().toISOString(), topics: TOPICS }, null, 2));
    zip.file("notes/lorem.md", "# Lorem\n\nNested file inside the archive.\n");
    return zip.generateAsync({ type: "nodebuffer" });
};

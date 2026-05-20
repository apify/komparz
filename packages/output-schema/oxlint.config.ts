import { defineConfig } from "@apify/oxlint-config";

export default defineConfig({
    ignorePatterns: ["**/node_modules", "**/dist"],
});

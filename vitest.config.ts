import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",

    setupFiles: ["./src/tests/setupTests.ts"],

    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/*.spec.ts",
      "**/*.spec.tsx",
    ],
  },
});
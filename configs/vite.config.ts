/// <reference types="vitest" />

/**
 * @see Configure Vitest (https://vitest.dev/config/)
 */

import { defineConfig } from "vite"
import { resolve } from "node:path"

export default defineConfig({
  resolve: {
    alias: {
      "@lie2ai": resolve(__dirname, "../packages/Lie2AI/src/"),
      "@site": resolve(__dirname, "../packages/site/.vitepress/config/"),
      "@utils": resolve(__dirname, "../packages/utils/src/"),
    },
  },
  test: {
    exclude: ["node_modules", "packages", "e2e", "dist"],
    reporters: ["default", "html"],
    globals: true,
  },
})

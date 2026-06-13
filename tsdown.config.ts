import { defineConfig } from "tsdown";

/**
 * Tsdown configuration
 *
 * @see {@link https://tsdown.dev Tsdown documentation}
 */
export default defineConfig({
  entry: ["src/index.ts"],
  platform: "node",
  format: "esm",
  target: "es2025",
  outExtensions() {
    return {
      js: ".js",
    };
  },
  minify: true,
  clean: true,
});

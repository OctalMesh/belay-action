import { defineConfig } from "vitest/config";

/**
 * Vitest configuration
 *
 * @see {@link https://vitest.dev/config Vitest documentation}
 */
export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "node",
    passWithNoTests: true,
    globals: true,
  },
});

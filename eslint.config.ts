import path from "node:path";
import { fileURLToPath } from "node:url";

import eslintConfigPrettierModule from "eslint-config-prettier";
import { defineConfig, globalIgnores } from "eslint/config";
import tseslint from "typescript-eslint";

/**
 * ESLint configuration
 *
 * @see {@link https://eslint.org/docs/latest/use/configure/configuration-files
 *      ESLint documentation}
 */
export default defineConfig([
  globalIgnores(["dist/**", "node_modules/**"]),

  {
    files: ["src/**/*.{ts,js}"],
    languageOptions: {
      ecmaVersion: "latest",
      parserOptions: {
        projectService: true,
        tsconfigRootDir: path.dirname(fileURLToPath(import.meta.url)),
      },
    },
    extends: [
      ...tseslint.configs.recommendedTypeChecked, // https://typescript-eslint.io/users/configs/#recommended-type-checked
      ...tseslint.configs.stylisticTypeChecked, // https://typescript-eslint.io/users/configs/#stylistic-type-checked
    ],
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },

  eslintConfigPrettierModule, // https://github.com/prettier/eslint-config-prettier#readme
]);

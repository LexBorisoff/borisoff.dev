import lexjs from "@lexjs/eslint/configs";
import { ignoreFile } from "@lexjs/eslint/utils";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import tseslint from "typescript-eslint";

export default defineConfig(
  ignoreFile(".gitignore", import.meta, { gitignoreResolution: true }),
  ...nextVitals,
  ...nextTs,
  ...lexjs.recommended,
  ...lexjs.typescript,
  ...lexjs.import,
  ...lexjs.importTs,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.js", "*.mjs"],
        },
      },
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
);

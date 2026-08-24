import { defineConfig, globalIgnores } from "eslint/config";
import nextPlugin from "@next/eslint-plugin-next";
import tsParser from "@typescript-eslint/parser";

export default defineConfig([
  globalIgnores([".next/**", "node_modules/**"]),
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: { parser: tsParser, parserOptions: { project: "./tsconfig.json", ecmaFeatures: { jsx: true } } },
    plugins: { "@next/next": nextPlugin },
    rules: nextPlugin.configs["core-web-vitals"].rules,
  },
]);

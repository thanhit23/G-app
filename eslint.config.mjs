import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import typeScriptEsLintPlugin from '@typescript-eslint/eslint-plugin';
import esLintConfigPrettier from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: typeScriptEsLintPlugin.configs['recommended'],
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...compat.config({
    extends: ['next', 'prettier'],
    settings: {
      next: {
        rootDir: 'packages/my-app/',
      },
    },
  }),
  esLintConfigPrettier,
];

export default eslintConfig;

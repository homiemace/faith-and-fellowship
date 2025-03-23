const sveltePlugin = require('eslint-plugin-svelte');
const tsParser = require('@typescript-eslint/parser');
const svelteParser = require('svelte-eslint-parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
  {
    ignores: [
      '.DS_Store',
      'node_modules/',
      '/build/',
      '/.svelte-kit/',
      '/package/',
      '.env',
      '.env.*',
      '!.env.example',
      'pnpm-lock.yaml',
      'package-lock.json',
      'yarn.lock'
    ]
  },

  // Base config for JS/TS files
  {
    files: ['**/*.js', '**/*.ts'],
    languageOptions: {
      parser: tsParser,
      sourceType: 'module',
      ecmaVersion: 2020,
      globals: {
        browser: true,
        es2017: true,
        node: true
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin
    },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier'
    ]
  },

  // Config for Svelte files
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tsParser,
        sourceType: 'module',
        ecmaVersion: 2020,
        extraFileExtensions: ['.svelte']
      },
      globals: {
        browser: true,
        es2017: true,
        node: true
      }
    },
    plugins: {
      svelte: sveltePlugin
    },
    extends: [
      'eslint:recommended',
      'plugin:svelte/recommended',
      'prettier'
    ]
  },

  // Root setting
  {
    settings: {
      root: true
    }
  }
];
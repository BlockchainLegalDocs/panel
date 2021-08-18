const path = require('path');

const resolve = (addr) => path.resolve(__dirname, addr);

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:compat/recommended',

    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',

    'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
    'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
  ],
  plugins: [
    '@typescript-eslint',
    'vue',
  ],
  parserOptions: {
    extraFileExtensions: ['.vue', '.json'],
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    project: resolve('./tsconfig.json'),
    tsconfigRootDir: __dirname,
  },
  rules: {
    'complexity': ['error', 11],
    'prefer-promise-reject-errors': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quote-props': ['error', 'consistent-as-needed'],
    'comma-dangle': ['error', 'always-multiline'],
    'quotes': ['error', 'single'],
    'semi': [2, 'always'],

    // TypeScript
    '@typescript-eslint/no-unused-vars': 'off', // for <script setup>
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    'vue/no-v-html': 'warn',
    'vue/max-attributes-per-line': [2, {
      singleline: 2,
      multiline: 1,
    }],
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 0,
      ignores: [],
    }],
    'vue/v-for-delimiter-style': ['error', 'of'],
    'vue/require-emit-validator': 'error',
    'vue/valid-next-tick': 'error',
    'vue/block-tag-newline': 'error',
    'vue/component-name-in-template-casing': ['error', 'PascalCase', {
      registeredComponentsOnly: true,
      ignores: [],
    }],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'vue/html-button-has-type': 'error',
    'vue/match-component-file-name': ['error', {
      extensions: ['vue'],
      shouldMatchCase: true,
    }],
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-static-inline-styles': ['error', { allowBinding: true }],
    'vue/padding-line-between-blocks': ['error', 'always'],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', resolve('./src')],
          ['@@', resolve('./src/views')],
          // ['@shared', resolve('./src/shared')],
          // ['@api', resolve('/src/api')],
          ['@stylesheets', resolve('./src/stylesheets')],
        ],
        extensions: ['.ts', '.js', '.vue'],
      },
    },
  },
};

import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-config-prettier'; // Prettier integration

export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'prettier/prettier': 'error', // Use Prettier rules for formatting
      'no-unused-vars': 'error',
      semi: ['error', 'always'],
      quotes: ['error', 'single'],
      'no-undef': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'no-console': 'warn',
    },
  },
  pluginJs.configs.recommended,
  prettier,
];

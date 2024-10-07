import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: globals.browser, // Allows browser-specific globals (window, document, etc.)
    },
    rules: {
      'no-unused-vars': 'error',
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-undef': 'error', 
      'comma-dangle': ['error', 'always-multiline'],
      'no-console': 'warn',
    },
  },
  pluginJs.configs.recommended,
];

import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        cy: true,
        jest: true,
        describe: true,
        it: true,
        beforeEach: true,
        afterEach: true,
        expect: true,
        global: true,
        require: true,
      },
    },
    rules: {
      'prettier/prettier': 'error',
    },
    plugins: {
      prettier: prettier,
    },
    ignores: ['node_modules', '.git', '*.min.js'], // Correctly formatted
  },
  pluginJs.configs.recommended,
];

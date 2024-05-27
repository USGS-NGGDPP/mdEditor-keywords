import globals from 'globals';
import pluginJs from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import jsonPlugin from 'eslint-plugin-json';

export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 2023,
      sourceType: 'module',
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-env']
        }
      }
    },
    plugins: {
      prettier: prettierPlugin,
      json: jsonPlugin
    },
    rules: {
      'prettier/prettier': ['error']
    }
  },
  pluginJs.configs.recommended,
  prettierPlugin.configs.recommended,
  jsonPlugin.configs.recommended,
  {
    settings: {
      jest: {
        version: 29
      }
    }
  }
];

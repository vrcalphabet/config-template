import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import regexpPlugin from 'eslint-plugin-regexp'
import unicorn from 'eslint-plugin-unicorn'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

export default defineConfig([
  {
    files: ['src/**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      regexpPlugin.configs.recommended,
      unicorn.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      /* eslint */
      'no-extra-boolean-cast': 'off',

      /* typescript-eslint */
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/strict-boolean-expressions': 'error',
      '@typescript-eslint/no-unnecessary-type-conversion': 'error',
      '@typescript-eslint/no-floating-promises': ['error', { ignoreIIFE: true }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'classProperty',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
        {
          selector: 'classMethod',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
        {
          selector: 'function',
          modifiers: ['global'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
        {
          selector: 'function',
          modifiers: ['exported'],
          format: ['camelCase'],
          leadingUnderscore: 'forbid',
        },
        {
          selector: 'class',
          modifiers: ['global'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
        },
        {
          selector: 'class',
          modifiers: ['exported'],
          format: ['camelCase'],
          leadingUnderscore: 'forbid',
        },
      ],

      /* unicorn */
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/name-replacements': 'off',
      'unicorn/consistent-class-member-order': [
        'error',
        {
          order: [
            'static-field',
            'static-block',
            'static-method',
            'private-field',
            'public-field',
            'constructor',
            'public-method',
            'private-method',
          ],
        },
      ],
    },
  },
])

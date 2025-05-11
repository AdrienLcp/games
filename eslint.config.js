import js from '@eslint/js'
import stylisticPlugin from '@stylistic/eslint-plugin'
import promisePlugin from 'eslint-plugin-promise'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  { ignores: ['apps/web-app/**'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strict
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2024,
      globals: globals.browser
    },
    plugins: {
      '@stylistic': stylisticPlugin,
      'promise': promisePlugin
    },
    rules: {
      ...promisePlugin.configs.recommended.rules,
      ...stylisticPlugin.configs.rules,

      '@stylistic/comma-dangle': ['error', 'never'],
      '@stylistic/comma-spacing': ['error', { 'before': false, 'after': true }],
      '@stylistic/eol-last': ['error', 'always'],
      '@stylistic/indent': ['error', 2, { 'offsetTernaryExpressions': true, 'SwitchCase': 1 }],
      '@stylistic/multiline-ternary': ['error', 'always-multiline'],
      '@stylistic/no-mixed-operators': 'error',
      '@stylistic/no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/operator-linebreak': ['error', 'before'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': ['error', 'never'],
      '@stylistic/space-infix-ops': 'error',

      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-extraneous-class': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }],
      
      'no-console': ['warn', { allow: ['error', 'info', 'warn'] }],
      'no-debugger': 'error',
      'no-unused-private-class-members': 'error',
      'no-useless-return': 'error',

      'sort-imports': ['error', {
        'ignoreCase': true,
        'ignoreDeclarationSort': true,
        'ignoreMemberSort': false,
        'memberSyntaxSortOrder': ['all', 'multiple', 'single', 'none'],
        'allowSeparatedGroups': true
      }]
    }
  }
)

import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import reactPlugin from 'eslint-plugin-react'
import reactHooksPlugin from 'eslint-plugin-react-hooks'
import reactRefreshPlugin from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

import baseConfig from '../../eslint.config.js'

export default tseslint.config(
  {
    extends: baseConfig,
    plugins: {
      'jsx-a11y': jsxA11yPlugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin
    },
    settings:{
      react: {
        version: 'detect'
      }
    },
    rules: {
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...jsxA11yPlugin.flatConfigs.recommended.rules,
      ...reactRefreshPlugin.configs.recommended.rules,

      'jsx-a11y/anchor-is-valid': ['error', { aspects: ['invalidHref', 'preferButton'] }],
      'jsx-a11y/no-autofocus': ['error', { ignoreNonDOM: true }],

      'react/react-in-jsx-scope': 'off'
    }
  }
)

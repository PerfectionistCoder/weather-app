// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt().override('nuxt/typescript/rules', {
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'any',
          normal: 'any',
          component: 'any',
        },
        svg: 'any',
        math: 'any',
      },
    ],
  },
})

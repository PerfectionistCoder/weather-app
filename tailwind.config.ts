import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ matchUtilities }) {
      matchUtilities({
        'font-dimension': (value) => ({
          fontSize: value,
          lineHeight: value,
        }),
      })
    }),
  ],
} satisfies Config

 
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'nx-',
  // add to content property "node_modules/nextra" mjs files
  
  content: ['./**/*.{js,ts,tsx,jsx}', '../../node_modules/nextra/dist/components/*.mjs'],
  theme: {
    fontFamily: {
      'sans': ['Avenir','Helvetica Neue','Helvetica','Arial', 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro','メイリオ', 'Meiryo', '游ゴシック', 'Yu Gothic', 'ＭＳ Ｐゴシック', 'sans-serif'],
      'serif': ['ヒラギノ明朝 Pro W3', 'Hiragino Mincho Pro', '游明朝','Yu Mincho', '游明朝体', 'YuMincho','ＭＳ Ｐ明朝', 'MS PMincho', 'serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      gray: colors.gray,
      slate: colors.slate,
      neutral: colors.neutral,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      primary: colors.blue
    },
    extend: {
      typography: theme => ({
        dark: {
          css: {
            color: theme('colors.gray[300]'),
            '[class~="lead"]': { color: theme('colors.gray[400]') },
            a: { color: theme('colors.gray[100]') },
            strong: { color: theme('colors.gray[100]') },
            'ul > li::before': { backgroundColor: theme('colors.gray[700]') },
            hr: { borderColor: theme('colors.gray[800]') },
            blockquote: {
              color: theme('colors.gray[100]'),
              borderLeftColor: theme('colors.gray[800]')
            },
            h1: { color: theme('colors.gray[100]') },
            h2: { color: theme('colors.gray[100]') },
            h3: { color: theme('colors.gray[100]') },
            h4: { color: theme('colors.gray[100]') },
            code: { color: theme('colors.gray[100]') },
            'a code': { color: theme('colors.gray[100]') },
            pre: {
              color: theme('colors.gray[200]'),
              backgroundColor: theme('colors.gray[800]')
            },
            thead: {
              color: theme('colors.gray[100]'),
              borderBottomColor: theme('colors.gray[700]')
            },
            'tbody tr': { borderBottomColor: theme('colors.gray[800]') }
          }
        }
      })
    }
  },
  variants: {
    extend: {
      typography: ['dark']
    }
  },
  plugins: [require('@tailwindcss/typography')],
  darkMode: ['class', 'html[class~="dark"]']
}

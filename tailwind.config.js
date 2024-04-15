import daisyui from 'daisyui'
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/components/**/*.tsx', './src/app/**/*.tsx'],
  theme: {},
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'retro', 'autumn'],
  },
}

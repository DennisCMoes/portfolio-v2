import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/components/**/*.tsx', './src/app/**/*.tsx'],
  theme: {},
  plugins: [require('daisyui')],
}

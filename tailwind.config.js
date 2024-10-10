/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/app/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D1D1F',
        secondary: '#A5A5A5',
        link: '#1B73F6',
        background: '#FAF9F6',
        footer: '#F1F1F1',
      },
    },
  },
  plugins: [],
}

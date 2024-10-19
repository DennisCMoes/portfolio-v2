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
        primary: {
          light: '#1D1D1F',
          dark: '#EDEDED',
        },
        secondary:'#A5A5A5',
        link: '#1B73F6',
        background: {
          light: '#FAF9F6',
          dark: '#2B2B2B',
        },
        card: {
          light: '#F2F0EB',
          dark: '#323232',
        },
        cardPressed: '#ECEAE3',
      },
    },
  },
  plugins: [],
}

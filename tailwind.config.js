import colors from 'tailwindcss/colors'

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
        background: {
          light: '#FFFFFF',
          dark: '#262626',
        },
        primary: {
          light: '#F0F0F0',
          dark: '#2F2F2F',
        },
        secondary: {
          light: '#DCDCDC',
          dark: '#262626',
        },
        tertiary: {
          light: '#A8A8A8',
          DEFAULT: '#ADADAD',
          dark: '#ADADAD',
        },
        quatinary: '',
        quinary: '',
      },
      keyframes: {
        fadeInUp: {
          '0%': { transform: 'translateY(5%)', opacity: 0 },
          '100%': { transform: 'translateY(0%)', opacity: 1 },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp forwards 1.5s ease-in-out',
      },
    },
  },
  plugins: [],
}

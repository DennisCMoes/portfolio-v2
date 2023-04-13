import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#FFFFFF',
          dark: '#2F2F2F',
        },
        primary: {
          light: '#F0F0F0',
          dark: '#262626',
        },
        secondary: {
          light: '#272727',
          dark: '#F7F7F7',
        },
        tertiary: {
          light: '#A8A8A8',
          DEFAULT: '#ADADAD',
          dark: '#ADADAD',
        },
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      // TODO: Make this animation more smoother
      animation: {
        wiggle: 'wiggle 2s ease infinite',
      },
    },
  },
  plugins: [],
}

import daisyui from 'daisyui'
import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/components/**/*.tsx', './src/app/**/*.tsx'],
  theme: {
    extend: {
      boxShadow: {
        'blue-border': '#bfdbfe 0px 1px 4px 0px, #93c5fd 0px 0px 0px 3px inset',
        'gray-border': '#e5e5e5 0px 2px 4px 0px, #d4d4d4 0px 0px 0px 2px inset',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        },
      },
      animation: {
        'rotate-back-and-forth': 'wiggle 2s ease-in-out infinite',
      },
    },
  },
  variants: {
    extend: {
      animation: ['group-hover'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'retro', 'autumn', 'dracula', 'retro'],
  },
}

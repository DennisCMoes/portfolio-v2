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
        background: {
          light: '#FAF9F6',
          dark: '#2B2B2B',
        },
        card: {
          light: '#F2F0EB',
          dark: '#323232',
        },
        cardPressed: '#ECEAE3',
        orange: "#D65D0E",
        blue: "#458588",
        red: "#CC241D",
        // Gruvbox colors
        gruvbox: {
          bg: {
            light: '#fbf1c7',
            dark: '#282828',
          },
          bg0: {
            light: '#fbf1c7',
            dark: '#282828',
          },
          bgH: {
            light: '#f9f5d7',
            dark: '#1d2021',
          },
          bgS: {
            light: '#f2e5bc',
            dark: '#32302f',
          },
          bg1: {
            light: '#ebdbb2',
            dark: '#3c3836',
          },
          bg2: {
            light: '#d5c4a1',
            dark: '#504945',
          },
          bg3: {
            light: '#bdae93',
            dark: '#665c54',
          },
          bg4: {
            light: '#a89984',
            dark: '#7c6f64',
          },
          fg: {
            light: '#3c3836',
            dark: '#ebdbb2',
          },
          fg0: {
            light: '#282828',
            dark: '#fbf1c7',
          },
          fg1: {
            light: '#3c3836',
            dark: '#ebdbb2',
          },
          fg2: {
            light: '#504945',
            dark: '#d5c4a1',
          },
          fg3: {
            light: '#665c54',
            dark: '#bdae93',
          },
          fg4: {
            light: '#7c6f64',
            dark: '#a89984',
          },
          red: {
            light: '#cc241d',
            dark: '#cc241d',
          },
          red2: {
            light: '#9d0006',
            dark: '#fb4934',
          },
          green: {
            light: '#98971a',
            dark: '#98971a',
          },
          green2: {
            light: '#79740e',
            dark: '#b8bb26',
          },
          yellow: {
            light: '#d79921',
            dark: '#d79921',
          },
          yellow2: {
            light: '#b57614',
            dark: '#fabd2f',
          },
          blue: {
            light: '#458588',
            dark: '#458588',
          },
          blue2: {
            light: '#076678',
            dark: '#83a598',
          },
          purple: {
            light: '#b16286',
            dark: '#b16286',
          },
          purple2: {
            light: '#8f3f71',
            dark: '#d3869b',
          },
          aqua: {
            light: '#689d6a',
            dark: '#689d6a',
          },
          aqua2: {
            light: '#427b58',
            dark: '#8ec07c',
          },
          orange: {
            light: '#d65d0e',
            dark: '#d65d0e',
          },
          orange2: {
            light: '#af3a03',
            dark: '#fe8019',
          },
          gray: {
            light: '#7c6f64',
            dark: '#a89984',
          },
          gray2: {
            light: '#928374',
            dark: '#928374',
          },
        },
      },
    },
  },
  plugins: [],
}

const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    colors: {
      orange: colors.orange,
      blue: colors.blue,
      red: colors.red,
      white: colors.white,
      gray: colors.gray
    },
    extend: {
      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12'
      }
    }
  },
  variants: {},
  plugins: [],
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.ts']
};

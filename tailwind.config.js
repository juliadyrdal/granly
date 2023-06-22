/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    fontFamily: {
      display: ['Playfair Display', 'serif'],
      sans: ['Inter', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'theme-surface-light': '#F4F0EC',
        'theme-accent': '#CDA274',
        'theme-grey-dark': '#292F36',
      },
    },
  },
  plugins: [],
}


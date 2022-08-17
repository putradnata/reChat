/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        baseblue: '#EEF2FF',
        mainblue: '#4A72FF',
        secondaryblue: '#E9EEFF',
      },
    },
  },
  plugins: [],
};

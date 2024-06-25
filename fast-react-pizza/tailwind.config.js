/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      gridTemplateRows: {
        'my-rows': 'auto 1fr auto',
      },
      colors: {
        lightOrange: '#FF733D',
        paleDark: '#6E6E6E',
        darkGrey: '#191919',
      },
    },
  },
  plugins: [],
};

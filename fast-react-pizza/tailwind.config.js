/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        myPoppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        myOrange: '#FF733D',
        paleDark: '#6E6E6E',
        darkGrey: '#191919',
        bgColor: '#36383a',
      },
      gridTemplateRows: {
        myRows: 'auto 1fr 1uto',
      },
    },
  },
  plugins: [],
};

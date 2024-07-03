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
        // we can use this at the same time we can use stated in the div in applayout using []
        myRows: '80px 1fr 100px',
        // below code use for full page scroll
        // myRows: '100vh 100vh 100vh',
      },
    },
  },
  plugins: [],
};

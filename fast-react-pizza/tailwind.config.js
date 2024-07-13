/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // configure the name of font family to sans to automatically change the font to the whole application
        sans: ['Poppins', 'sans-serif'],
        myRoboto: ['Roboto Mono', 'monospace'],
      },
      colors: {
        myOrange: '#ec1a37',
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
      height: {
        // changing 100vh for screen in height to dvh for mobile sizes
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};

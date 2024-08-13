/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        NormalWhite:'#F9F7FF',
        GreenText:'#31E098',
        PurpleFooter:'#473573',
        main:'#231931',
        secondary:'#302444'
      },
      fontFamily:{
        'Poppins-Bold':['Poppins-bold','Serif'],
        'Poppins-Light':['Poppins-light','Serif']
      }
    },
  },
  plugins: [],
}


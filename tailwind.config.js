/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        NormalWhite:"#F9F7FF"
      },
      fontFamily:{
        "Poppins-Bold":["Poppins-bold",'Serif'],
        "Poppins-Light":["Poppins-light",'Serif']
      }
    },
  },
  plugins: [],
}


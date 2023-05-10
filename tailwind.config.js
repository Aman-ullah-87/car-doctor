/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'inter':' Inter, sans-serif'
     
    }
    ,
    extend: {
      colors:{
        'primary':'#FF3811',
      }
    },
  },
  plugins: [require("daisyui")],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      
// Primary

"dark-cyan": "hsl(158, 36%, 37%)",
"darker-cyan":"hsla(158, 46%, 20%, 0.959)",
"cream": "hsl(30, 38%, 92%)",

// ### Neutral

 "dark-blue": "hsl(212, 21%, 14%)",
"dark-grayish-blue": "hsl(228, 12%, 48%)",
"white": "hsl(0, 0%, 100%)",
},
fontFamily:{
  'montserrat':['Montserrat', 'sans-serif'],
  'fraunces':['Fraunces', 'serif'],
},
    extend: {},
  },
  plugins: [ require("daisyui")],
}

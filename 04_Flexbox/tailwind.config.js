/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"], 
  theme: {
    extend: {}, 
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}



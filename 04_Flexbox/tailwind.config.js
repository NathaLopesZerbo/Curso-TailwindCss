/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"], // Certifique-se de que está apontando para os arquivos certos
  theme: {
    extend: {}, // Você pode adicionar novas cores aqui se necessário
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}



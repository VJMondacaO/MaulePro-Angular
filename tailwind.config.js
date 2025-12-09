/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'md-large': '1360px', // Breakpoint para 2 columnas en pantallas medianas
        'xl-large': '1700px', // Breakpoint para 4 columnas en pantallas grandes
        '3xl': '1920px', // Breakpoint personalizado para pantallas muy grandes
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-primeui')
  ],
}


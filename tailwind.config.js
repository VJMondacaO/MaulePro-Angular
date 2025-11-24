/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        '3xl': '1920px', // Breakpoint personalizado para pantallas muy grandes
      },
    },
  },
  plugins: [
    require('tailwindcss-primeui')
  ],
}


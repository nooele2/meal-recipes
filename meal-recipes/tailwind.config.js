/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/pages/home/home.component.html",
    "./src/app/pages/home/home.component.ts",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}


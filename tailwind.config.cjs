/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway']
      },
      colors: {
        primary: "#2f8ef5"
      },
      transitionProperty: {
        'width': 'width'
    },
    },
  },
  plugins: [],
}

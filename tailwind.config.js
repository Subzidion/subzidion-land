/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./components/*.{js,ts,jsx,tsx,mdx}",
    "./pages/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      black: colors.black,
      seasalt: "#FAFAFA",
      jet: "#353535",
      lightBlue: "#A4DEDE",
      blue: "#59C3C3",
      darkBlue: "#297373",
      lightRed: "#D2C8D0",
      red: "#AD9BAA",
      darkRed: "#635160",
      lightGreen: "#BBD0C0",
      green: "#84A98C",
      darkGreen: "#44614a",
    },
  },
  plugins: [],
}


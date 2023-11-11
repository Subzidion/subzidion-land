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
      robinEggBlue: "#59C3C3",
      myrtleGreen: "#297373",
      cambridgeBlue: "#84A98C",
      roseQuartz: "#AD9BAA",
      eggplant: "#635160",
    },
  },
  plugins: [],
}


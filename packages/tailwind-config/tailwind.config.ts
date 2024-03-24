import type { Config } from "tailwindcss";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  theme: {
    extend: {},
    colors: {
      black: "#000000",
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

export default config;
const { theme } = require("tailwindcss/defaultConfig");
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Lato"', ...theme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      orange: "#FF4E00",
      teal: "#3CBBB4",
      gray: {
        50: "#EBEBEB ",
        100: "#F7F8FF",
        200: "#D9DCEF",
        300: "#8280A8",
        400: "#100050",
      },
      green: { 100: "#44D7B6", 200: "#12CA68" },
      red: { 100: "#FF647C", 200: "#E02020" },
      yellow: { 100: "#FDC718", 200: "#F7B500", 300: "#F9AD1D" },
      blue: { 100: "#14B8E7", 200: "#0091FF" },
      white: colors.white,
      black: colors.black,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

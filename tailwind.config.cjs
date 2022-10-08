/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      primary: "Roboto",
      body: "Roboto",
    },
    screens: {
      sm: "282px",
      md: "540px",
      lg: "912px",
      xl: "1280px",
    },
    extend: {
      colors: {
        /*LIGHT*/
        primary: "#372948",
        bodyLight: "#FFECEF",
        cardLight: "#FFCACA",
        /*DARK*/
        secondary: "#FFCACA",
        bodyDark: "#251B37",
        cardDark: "#372948",
      },
    },
  },
  plugins: [Myclass],
};

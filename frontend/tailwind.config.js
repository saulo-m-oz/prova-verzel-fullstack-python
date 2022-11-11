/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/app/**/*.{js,ts,jsx,tsx}",
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlack: {
          100: "#303030",
          200: "#2B2B2B",
          300: "#1F1F1F",
          400: "#1B1C1E",
        },
        primary: "#2E1A35",
        secondary: "#FF5975",
        pink: {
          100: "#FFF7FA",
          200: "#FEDADA"
        },
      },
      keyframes:{
        menuSlide: {
          "0%": {transform: "translateX(-150px)"},
          "75%": {transform: "translateX(10px)"},
          "100%": {transform: "translateX(0px)"}
        },
      },
      animation:{
        menuSlide: "menuSlide .35s ease-out",
      },
    },
  },
  plugins: [],
}
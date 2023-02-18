/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        quicksand: "'Quicksand', sans-serif",
        dancing: "'Dancing Script', cursive",
      },
      colors: {
        myPink: "#FFE8E8",
        logoColor: "#242424",
        silver: "#4D4D4D",
      },
    },
  },
  plugins: [],
};

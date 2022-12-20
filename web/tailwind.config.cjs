/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#6BCAD3",
        secondary: "#27272a",
      },
      fontFamily: {
        comic: ["Comic Neue", "cursive"],
      },
      backgroundColor: {
        header: "#6BCAD3",
      },
      backgroundImage: {
        wave: "url('./wave.svg')",
      },
    },
  },
  plugins: [],
};

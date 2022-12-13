/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        comic: ["Comic Neue", "cursive"],
      },
      backgroundColor: {
        header: "#6BCAD3",
      },
    },
  },
  plugins: [],
};

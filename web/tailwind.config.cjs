/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      dropShadow:{
        title1: '4px 4px 0px rgba(177, 24, 28, 100)',
        title2: '4px 4px 0px rgba(67, 138, 178, 100)',
        header: '3px 3px 0px rgba(0, 0, 0, 100)',
      },
      colors: {
        logo: "#F3DF0C",
        primary: "#7781DD",
        secondary: "#27272a",
        "primary-title": "#F3DF0C",
        "secondary-title": "#3B2C5A",
        "primary-text": "#131D1F",
        theader1: "#B1181C",
        theader2: "#DAC80B",
        theader3: "#438AB2",

      },
      fontFamily: {
        comic: ["Roboto", "cursive"],
        badaboom: ["Badaboom"],
      },
      backgroundColor: {
        header: "#7781DD",
      },
      backgroundImage: {
        wave: "url('./wave.svg')",
        stark: "url('/stark.png')",
        cap: "url('/cap.png')",
      },
    },
  },
  plugins: [],
};

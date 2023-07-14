/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      dropShadow:{
        title1: '4px 4px 0px rgba(177, 24, 28, 100)',
        title2: '4px 4px 0px rgba(67, 138, 178, 100)',
        header: '1px 1px 0px rgba(0, 0, 0, 100)',
      },
      colors: {
        logo: "#F3DF0C",
        primary: "#7781DD",
        secondary: "#27272a",
        "primary-title": "#F3DF0C",
        "secondary-title": "#3B2C5A",
        "primary-text": "#131D1F",
        theader2: "#DAC80B",
        theader3: "#B1181C",
        theader4:"#438AB2",
        thover3: "#A93F42",
        thover2:"#D6CC62",
        thover4:"#689CB9",
        //transitions

        color1: "rgba(119, 129, 221, 100)",
        color2: "rgba(119, 129, 221, 70)",
        color3: "rgba(119, 129, 221, 20)",
        color4: "rgba(119, 129, 221, 0)",    

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

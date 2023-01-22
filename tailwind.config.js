/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*/*.js"],
  theme: {
    screens: {
      sm: "320px",
      md: "450px",
      lg: "720px",
      xl: "1240px",
    },
    extend: {
      colors: {
        // Primary
        lightRedCTA: "hsl(356, 100%, 66%)",
        veryLightRedHoverBG: "hsl(355, 100%, 74%)",
        veryDarkBlue: "hsl(208, 49%, 24%)",

        // Neutral
        whiteTxT: "hsl(0, 0%, 100%)",
        grayishBlueFooterTxt: "hsl(240, 2%, 79%)",
        veryDarkGrayishBlueBody: "hsl(207, 13%, 34%)",
        veryDarkBlackBlueFooter: "hsl(240, 10%, 16%)",

        // Gradient mobile
        veryLightRedCTA: "hsl(13, 100%, 72%)",
        lightRedNav: "hsl(353, 100%, 62%)",

        // Gradient body
        veryDarkGrayBlue: "hsl(237, 17%, 21%)",
        veryDarkDesaturatedBlue: "hsl(237, 23%, 32%)",
      },
    },
  },
  plugins: [],
};

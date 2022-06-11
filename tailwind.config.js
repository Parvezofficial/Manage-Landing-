/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screen: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    },
    extend: {
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedsupLight: 'hsl(12, 88%, 95%)',
        darkBlue:'hsl(228, 39%, 23%)',
        darkGrayishBlue:'hsl(227, 12%, 61%)',
        VeryDarkBlue:'hsl(223, 12%, 13%)',
        VeryPalRed:'hsl(13, 100%, 96%)',
        VeryLightGray:'hsl(0, 0% , 98%)',
      },
    },
  },
  plugins: [],
}

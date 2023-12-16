/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.htmlS "],
  theme: {
    extend: {},
    screens: {
      sm: "400px",
      md: "600px",
      lg: "900px",
      xl: "1200px",
      "2xl": "1400px",
    },
    colors: {
      primary: "#70C174",
      secondary: "#BEF3C0",
      thirdth: "#EFF7F2",
      fourth: "#0B0706",
      fifth: "#1D2130",
      sixth: "#525560",
      seventh: "#EBF0F9",
      eighth: "#E5E5E5",
    },
    container: {
      center: true,
      padding: 20,
    },
    fontFamily: {
      roboto: "Roboto",
    },
  },
  plugins: [],
};

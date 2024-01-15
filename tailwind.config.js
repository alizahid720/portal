module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        cyan: { A400: "#02d6e9" },
        gray: {
          50: "#f9f9ff",
          100: "#f2f2f2",
          400: "#bdbdbd",
          600: "#828282",
          700: "#5e6470",
          900: "#191c21",
        },
        blue_gray: { 100: "#d7dae0", 900: "#2c2d3c" },
        amber: { 500: "#febe14" },
        indigo: {
          900: "#00066a",
          "900_a2": "#00066aa2",
          "900_00": "#00076a00",
          "900_99": "#00076a99",
          "900_cc": "#00076acc",
        },
        light_green: { A700: "#44c420" },
        light_blue: { 500: "#0fa3f4" },
        green: { A200: "#7fffa3" },
        blue: { 50: "#ecf2fe" },
        yellow: { 400: "#f2ff60" },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        lato: "Lato",
        gilroy: "Gilroy",
        inter: "Inter",
        passionone: "Passion One",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

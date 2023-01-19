/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
   theme: {
    extend: {
      fontFamily: {
      rowdies: ["Rowdies Display", "serif"],
      playfair: ["Playfair Display", "serif"],
      opensans: ["Open Sans", "sans-seriff"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};



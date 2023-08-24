/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "2200px",
      },
      colors: {
        "dark-light": "#71706f",
        dark: "#212121",
        primary: "#df5c43",
        hover: "#f1f0ec",
      },
      fontFamily: {
        roboto: ["Roboto"],
      },
    },
  },
  plugins: [],
};

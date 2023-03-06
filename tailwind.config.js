/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extextShadow: {
      md: "2px 2px 4px rgb(0 0 0 / 45%);",
    },
    backgroundImage: {
      "gradient-to-b":
        "linear-gradient(to bottom,rgba(6, 78, 19, 0.10) 0,rgba(6, 78, 19,.15) 15%,rgba(6, 78, 19,.35) 29%,rgba(6, 78, 19,.58) 54%,#064e13 68%,#064e13 100%);",
    },
    footer: {
      "gradient-to-t":
        "linear-gradient(to top,rgba(6, 78, 19, 0.10) 0,rgba(6, 78, 19,.15) 15%,rgba(6, 78, 19,.35) 29%,rgba(6, 78, 19,.58) 54%,#064e13 68%,#064e13 100%);",
    },
    tend: {},
  },
  plugins: [
    require("tailwindcss-textshadow"),
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
  ],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#df2935",
        secondary: "#fdca40",
        tertiary: "#3772ff",
        customBlack: "#080708",
        customWhite: "#e6e8e6",
      },
    },
  },
  plugins: [],
};

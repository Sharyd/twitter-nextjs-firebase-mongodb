/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        sm: "0 3px 5px -1px #1d9bf0",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

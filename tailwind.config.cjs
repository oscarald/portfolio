/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
        "Roboto Mono": ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

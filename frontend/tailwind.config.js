/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  darkMode: 'class', // This enables class-based dark mode control
  daisyui: {
    themes: ["light"], // Set the default theme to "light"; add "dark" if you want to switch themes manually
  },

}


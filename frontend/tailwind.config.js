/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        red: "0 4px 6px rgba(255, 0, 0, 0.5)",
        "gradient-red":
          "0 4px 6px rgba(255, 0, 0, 0.3), 0 6px 10px rgba(255, 0, 0, 0.5), 0 8px 20px rgba(255, 0, 0, 0.2)", // New gradient red shadow
      },
    },
  },
  plugins: [daisyui], // Use import here instead of require
  darkMode: "class", // This enables class-based dark mode control
  daisyui: {
    themes: ["light"], // Set the default theme to "light"; add "dark" if you want to switch themes manually
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{ts,tsx}",
    
  ],
  theme: {
    extend: {},
  },
  plugins: ['@tailwindcss/aspect-ratio'],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hanken: ['"Hanken Grotesk"', 'sans-serif'],
        roca: ['Roca', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


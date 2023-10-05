/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto' : ['Roboto']
      },
      screens: {
        'tablet': '640px',
        'laptop': '1024px',
        'desktop': '1400px'
      },
    },
  },
  plugins: [],
}


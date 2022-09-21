/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        twitchrivals: "url('../public/twitchrivals.png')",
        minehut: "url('../public/minehut.png')"

      }
    },
  },
  plugins: [],
}
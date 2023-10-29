/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
      backgroundImage:{
        'gambar-home': "url('https://img.freepik.com/free-photo/top-view-delicious-food-with-copy-space_23-2150873986.jpg?t=st=1696227628~exp=1696231228~hmac=c53b26aa0911505ce504e0127f11538e591953153f5fe64b0bee86f209a97d68&w=900')"
      }
    }
  },
  plugins: [],
}
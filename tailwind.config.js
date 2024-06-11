/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-with': '#F8FAFC',
        'custom-yelow': '#F5D565 ',
        'custom-beish': '#F5E8D5 ',
        'custom-orange': '#E9A23B ',
        'custom-limon-green': '#A0ECB1 ',
        'custom-green': '#32D657 ',
        'custom-red': '#DD524C',
        'custom-pink': '#F7D4D3 ',
        'custom-light-grey': '#E3E8EF ',
        'custom-dark-grey': '#97A3B6 ',
        'custom-medium-grey': '(0#000033 ',
        'custom-blue': '#3662E3 ',
      },  
    },
    fontFamily:{
      "Outfit": ['Outfit', 'sans-serif']
    }
  },
  plugins: [],
}


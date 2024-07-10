/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        progress: 'progress 3s linear',
      },
      keyframes: {
        progress: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
    
    },
    fontFamily:{
      signature:["Signika Negative "],
      playwrite: ['"Playwrite HR Lijeva"', 'cursive'],
      roboto: ['"Roboto Flex"', 'san-serif'],

      
    },
  },
  plugins: [],
}


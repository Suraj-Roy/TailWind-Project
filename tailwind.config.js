/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors :{
        neturalSliver : "#F5F7FA",
        neturalDGray : "#4D4D4D",
        brandPrimary : "#4CAF4F",
        naturalGray : "#717171",
        
      },
      container :{
        center : true,
        padding :"15px"
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        quicksand: "'Quicksand', sans-serif",
        dancing: "'Dancing Script', cursive",
      },
      colors: {
        myPink: "#FFE8E8",
        logoColor: "#242424",
        silver: "#4D4D4D",
        siteDark: "#232323"
      },
      width:{
        '30%': "30%"
      },
      screens: {
        '2xl': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xl': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lg': {'max': '1023px'},
        // => @media (max-width: 1023px) { ... }
  
        'md': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'sm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
        'mn': {'min':'640px'}
        // => @media (min-width: 639px) { ... }
      },
      translate: {
        'center': '-50%',
        'btn':'-2.5rem'
      },
      zIndex: {
        'behind': '-1',
      }
    },
  },
  plugins: [],
};

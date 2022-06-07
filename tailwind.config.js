module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neural: "#1F1F1F",
        orange:'#FF782B',
      },
      screens: {
        '2xlm': {'max': '1535px'},
        // => @media (max-width: 1535px) { ... }
  
        'xlm': {'max': '1279px'},
        // => @media (max-width: 1279px) { ... }
  
        'lgm': {'min': '1024px'},
        // => @media (max-width: 1023px) { ... }
  
        'mdm': {'max': '767px'},
        // => @media (max-width: 767px) { ... }
  
        'smm': {'max': '639px'},
        // => @media (max-width: 639px) { ... }
      }
    },
  },
  plugins: [],
};

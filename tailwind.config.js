module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        orange: "#E9520F",
        yardblue:"#102754"
      },

      translate:{
        account: "translate(12%, 0)", 
      },

      skew: {

        '45': '45deg',
      },

      backgroundImage: {
        'hero': "url('/images/LandingBackground.jpg')",
        
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

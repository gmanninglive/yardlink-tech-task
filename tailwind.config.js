module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        orange: "#E9520F",
        yardblue:"#102754",
        darkblue: "#243367",
        lightgray: "#F7F9FD",
        lightblue: "DDE4ED",
        lightgreen: "F7FDF9",
        darkgreen: "#6EA066",
        lightred: "#FFE7E2",
        darkred: "#A06670",
        orange: "#E9520F",
      },
      translate:{
        account: "translate(12%, 0)", 
      },
      skew: {
        '45': '45deg',
      },
      backgroundImage: {
        'hero': "url('/images/LandingBackground.jpg')",
        'select-icon': "url('/branding/icon-arrow.svg')"
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

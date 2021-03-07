module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        oshb: '#00a15e',
        oshd: '#008452'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      heading: ['Montserrat', 'sans-serif'],
    },
    extend: {
      textColor: {
        primary: '#E35A44',
      },
      backgroundColor: {
        'primary': '#E35A44',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.2)',
        primary: '#E35A44',
      },
      fill: {
        primary: '#E35A44',
      },
      width: {
        100: '100px',
        200: '200px',
        300: '300px',
        350: '350px',
        400: '400px',
        500: '500px',
        760: '760px',
        '90': '90%',
      },
      height: {
        100: '100px',
        120: '120px',
        150: '150px',
        200: '200px',
        300: '300px',
        400: '400px',
        500: '500px',
        700: '700px',
      },
      minHeight: {
        590: '590px',
      },
      margin: {
        '0.5': '0.125rem',
      },
      backgroundImage: {
        'about-bg': 'url(/images/pablo.jpeg)',
        // 'second-bg': 'url(/images/second-bg.jpg)',
      }
    },
  },
  plugins: [],
}
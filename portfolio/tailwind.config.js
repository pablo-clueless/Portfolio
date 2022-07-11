module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Barlow', 'sans-serif'],
      body: ['Barlow', 'sans-serif'],
    },
    extend: {
      textColor: {
        primary: '#E35A44',
        secondary:  '#8A9B8C',
        light:  '#FFFFFF',
        dark:  '#262626',
      },
      backgroundColor: {
        'primary': '#E35A44',
        'main-bg': '#FFFFFF',
        'main-dark-bg': '#262626',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.2)',
      },
      width: {
        300: '300px',
        350: '350px',
        400: '400px',
        760: '760px',
      },
      height: {
        100: '100px',
        120: '120px',
        150: '150px',
        200: '200px',
        400: '400px',
      },
      minHeight: {
        590: '590px',
      },
    },
  },
  plugins: [],
}
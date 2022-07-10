module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Barlow', 'sans-serif'],
      body: ['Barlow', 'sans-serif'],
    },
    extend: {
      color: {
        main: '#E35A44',
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
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
    },
  },
  plugins: [],
}
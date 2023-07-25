module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        jiggle: 'jiggle 150ms cubic-bezier(0.25, 1, 0.3, 0.8)',
        shrink: 'shrink 300ms cubic-bezier(0.25, 1, 0.3, 0.8)',
      },
      backgroundImage: {
        mountains: "url('/images/mountains.jpg')",
        wavy: "url('/images/wavy.png')",
      },
      keyframes: {
        jiggle: {
          "0%": { transform: 'translateX(2px)' },
          "25%": { transform: 'translateX(-2px)' },
          "50%": { transform: 'translateX(2px)' },
          "75%": { transform: 'translateX(-2px)' },
          "100%": { transform: 'translateX(0)' },
        },
        shrink: {
          "0%": { transform: "scale(1)"},
          "50%": { transform: "scale(0.9)"},
          "100%": { transform: "scale(1)"},
        }
      }
    },
  },
  plugins: [],
}
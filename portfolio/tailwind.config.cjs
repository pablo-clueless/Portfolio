module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      animation: {
        jiggle: "jiggle 150ms cubic-bezier(0.25, 1, 0.3, 0.8)",
        shrink: "shrink 300ms cubic-bezier(0.25, 1, 0.3, 0.8)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.jpg')",
      },
      colors: {
        primary: "#323330",
        secondary: "#AAA6C3",
        tertiary: "#151030",
        "black-100": "#100D25",
        "black-200": "#090325",
        "white-100": "#F3F3F3",
      },
      keyframes: {
        jiggle: {
          "0%": { transform: "translateX(2px)" },
          "25%": { transform: "translateX(-2px)" },
          "50%": { transform: "translateX(2px)" },
          "75%": { transform: "translateX(-2px)" },
          "100%": { transform: "translateX(0)" },
        },
        shrink: {
          "0%": { transform: "scale(1)"},
          "50%": { transform: "scale(0.9)"},
          "100%": { transform: "scale(1)"},
        }
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
}
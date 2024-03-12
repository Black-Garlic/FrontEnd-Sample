module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#020715",
        "sub-1": "#FFFFFF",
        "sub-2": "#00BFFF",
        "sub-3": "#044778",
        "sub-4": "#000000",
        "sub-5": "#E3E2E2",
        "sub-6": "#808080",
        background: "#D5D9DE",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
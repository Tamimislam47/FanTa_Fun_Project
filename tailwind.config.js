// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      backgroundImage: {
        "custom-bgColor": "#450a0a",

        "custom-gradient":
          "linear-gradient(150deg, rgb(255, 166, 0), rgb(255, 94, 0))",
      },
      fontFamily: {
        "custom-family": ["Playwrite BE WAL", "cursive"],
      },
      colors: {
        "custom-bgColor-btn": "#FF9E00",
      },
    },
  },
  plugins: [],
};

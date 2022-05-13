tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: "rgba(50, 180, 180, 0.9)",
        secondary: "black",
        gradient: ["bg-gradient-to-r", "from-pink-300", "to-slate-400"],
      },
      fontFamily: {
        titulo: ["Alatsi", "sans-serif"],
      },
      keyframes: {
        shake: {
          "0%, 100%": {
            transform: "rotate(-10deg)",
          },
          "50%": {
            transform: "rotate(10deg)",
          },
        },
      },
      animation: {
        shake: "shake 0.31s ease-in-out infinite",
      },
    },
  },
};

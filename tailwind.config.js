/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow-stop": "spinSlowStop 8s ease-out forwards",
      },
      keyframes: {
        spinSlowStop: {
          "0%": { transform: "rotate(0deg)" },
          "80%": { transform: "rotate(2160deg)" }, // Full spins (4x360deg)
          "100%": { transform: "rotate(1445deg)" }, // Minor slow down towards the end
        },
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/services-pages/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-blue": "rgba(131, 176, 225, 0.4) 10px 25px 50px",
        "custom-blue2": "rgba(131, 176, 225, 0.6) 10px 25px 50px",
        "blurred-edges": "0 0 8px 8px #ffffff inset, 0 0 8px 8px #ffffff inset",
        "toggle-menu": "rgba(131, 176, 225, 0.6) 30px 30px 70px",
      },
      keyframes: {
        popup: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
      // Define the animation utility based on the keyframes
      animation: {
        popup: "popup 300ms cubic-bezier(0.4, 0, 0.2, 1) forwards",
      },
      // Add any other properties needed for the transition
      transitionProperty: {
        // Ensure you have 'transform' if you're transforming elements
        transform: "transform",
      },
      transitionDuration: {
        "300": "300ms",
      },
      transitionTimingFunction: {
        popup: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      backgroundImage: {
        "custom-blue-gradient":
          "linear-gradient( to right, rgba(131, 176, 225, 0.6), rgba(131, 176, 225, 0.8))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        playfair: ['"Playfair Display"', "serif"], // Create a custom name 'playfair'
        montserrat: ['"Montserrat"', "sans-serif"], // Create a custom name 'montserrat'
        sriracha: ['"Sriracha"', "cursive"], // Create a custom name 'sriracha'
      },
    },
  },
  plugins: [],
};
export default config;

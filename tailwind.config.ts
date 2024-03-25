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
      },
      backgroundImage: {
        "custom-blue-gradient":
          "linear-gradient( to right, rgba(131, 176, 225, 0.6), rgba(131, 176, 225, 0.8))",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

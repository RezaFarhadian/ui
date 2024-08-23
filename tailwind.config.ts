import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradi": "linear-gradient(261.24deg, #3076FF 57.42%, #0057FF 98.52%)",
        "gradi2": "linear-gradient(269.23deg, #A1E9FF 0.51%, #0014FF 99.34%)"
      },
      colors: {
        main: "#EFFCFF",
        red: "#890600",
        blue: "#3077FF",
        lightprim: "#A1E9FF",
        darkprim: "#00A8FF",
        transparent: "transparent",
        light: "#A1E9FF",
        prple: "#462697"
      },
      keyframes: {
        swap: {
          "0%": {
            "background": "url('/khonegi_0.png')",
            "background-repeat": "no-repeat",
            "background-size": "contain"
          },
          "100%": {
            "background": "url('/khonegi_1.png')",
            "background-repeat": "no-repeat",
            "background-size": "contain"
          }
        }
      }
    },
  },
  plugins: [],
};
export default config;

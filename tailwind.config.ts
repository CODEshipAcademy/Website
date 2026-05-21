import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#2E3246",
        yellow: "#FFD740",
        supportBlue: "#3F51B5",
        surface: "#F4F5F7"
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-montserrat)", "sans-serif"]
      },
      boxShadow: {
        premium: "0 20px 60px -24px rgba(46, 50, 70, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;

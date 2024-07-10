import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f05915",
        secondary: "#004064",
        safha: "#50F5AC",
        black: "#000000",
        white: "#ffffff",
      },
      fontFamily: {
        primary: ["El Messiri", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config

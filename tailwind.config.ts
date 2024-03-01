import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#006FEE",
        secondary: "#FB6F31",
        muted: "#6c757d",
        "primary-red": "#F43F5E",
        "linkHover": "#E5F1FD",
        "activeLink": "#006FEE",
        danger: "#F31260"
      },
    },
  },
  plugins: [require("daisyui")],
}
export default config

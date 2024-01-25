import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      apple: "SF Pro Text",
    },
    extend: {
      colors: {
        "apple-blue": "#0077ed",
        "apple-blue-hover": "#306fdb",
        "apple-blue-focus": "#0071e3",
      },
    },
  },
  plugins: [],
};
export default config;

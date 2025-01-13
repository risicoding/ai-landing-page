import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary:"#CEEF4C",
        secondary:"#E7FF8F",
        muted:"#E9EBF1",
        mutedSecondary:"#EFF4F7"
      },
    },
  },
  plugins: [],
} satisfies Config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "3xl": "1920px",
        "4xl": "2460px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        jarvisPrimary: "var(--jarvis-svetla)",
        jarvisSecondary: "var(--jarvis-tmava)",
        jarvisBg: "var(--jarvisBg)",
        jarvis1: "#2F5D50",
        jarvis2: "#C8B394",
        jarvis3: "#F7941D",
        jarvis4: "#262626",
      },
    },
  },
  plugins: [],
};

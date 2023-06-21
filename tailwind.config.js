/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      "lemonade",
      "business",
      "aqua",
      "cyberpunk",
      "valentine"
    ]
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
}
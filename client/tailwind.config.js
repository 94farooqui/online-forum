/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "ui-sans-serif", "system-ui"],
        curly: ["Playwrite CL", "cursive"],
      },
    },
  },
  plugins: [],
};
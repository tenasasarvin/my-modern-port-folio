/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Sora', 'sans-serif'],
        body: ['Poppins', 'sans-serif'],
      },
      colors: {
        'brand-accent': '#00BFFF', // Deep Sky Blue
        'dark-bg': '#0A0A0A',
        'dark-card': '#121212',
        'dark-text': '#EAEAEA',
        'dark-subtext': '#A0A0A0',
        'dark-border': '#262626',
      }
    },
  },
  plugins: [],
}

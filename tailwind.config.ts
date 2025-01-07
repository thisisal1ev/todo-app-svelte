import { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
      colors: {
        mainBlack: '#252525',
        violet: '#6C63FF',
        grey: '#F7F7F7',
      },
    },
  },
  plugins: [],
} satisfies Config


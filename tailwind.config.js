/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3b82f6', // blue
        'secondary': '#10b981', // green
        'danger': '#ef4444', // red
        'warning': '#f59e0b', // orange
        'gold': '#fbbf24',
        'background': '#1a1a1a',
        'card-bg': '#2d2d2d',
        'border-color': '#404040',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
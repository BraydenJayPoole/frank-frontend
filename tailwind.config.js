/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // References: 3.1. UI/UX Style Guide
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-blue': {
          500: '#3B82F6',
          600: '#2563EB',
        },
        'neutral': {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          500: '#737373',
          700: '#404040',
          900: '#171717',
        },
        'success': '#16A34A',
        'warning': '#F59E0B',
        'danger': '#DC2626',
      }
    },
  },
  plugins: [],
}

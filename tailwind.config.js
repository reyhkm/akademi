/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#111827', // slate-900
        light: '#ffffff',
        primary: '#8b5cf6', // violet-500
        secondary: '#22d3ee', // cyan-400
        accent: '#f43f5e', // rose-500
        'text-dark': '#d1d5db', // slate-300
        'text-light': '#374151', // slate-700
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Clash Display', 'sans-serif'], // Placeholder, needs font import
      },
      animation: {
        'text-reveal': 'text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) 0.5s forwards',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
      },
      keyframes: {
        'text-reveal': {
          '0%': { transform: 'translate(0, 100%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

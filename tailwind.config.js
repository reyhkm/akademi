/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0D1117', // A deeper, slightly blue-ish black
        light: '#ffffff',
        primary: '#a855f7', // A richer purple (violet-500)
        secondary: '#22d3ee', // cyan-400
        accent: '#f43f5e', // rose-500
        'text-dark': '#a0aec0', // A softer gray (coolGray-400)
        'text-light': '#1f2937', // slate-800
        'border-color': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Clash Display"', 'sans-serif'],
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

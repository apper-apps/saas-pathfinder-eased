/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#F3F4F6',
          100: '#E5E7EB',
          500: '#5B21B6',
          600: '#4C1D95',
          700: '#3730A3',
        },
        secondary: {
          500: '#7C3AED',
          600: '#6D28D9',
        },
        accent: {
          500: '#10B981',
          600: '#059669',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
      },
      animation: {
        'scale-in': 'scale-in 0.2s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
      },
      keyframes: {
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
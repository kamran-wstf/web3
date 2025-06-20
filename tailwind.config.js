/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a2b4e',
          light: '#2a3b5e',
          dark: '#0a1b3e',
        },
        secondary: {
          DEFAULT: '#00a8ff',
          light: '#33b8ff',
          dark: '#0088cc',
        },
        accent: {
          DEFAULT: '#7b52ab',
          light: '#9672c1',
          dark: '#5b3281',
        },
        background: {
          DEFAULT: '#0d1117',
          light: '#1d2127',
          dark: '#030507',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'flow': 'flow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 8s ease infinite',
        'ripple': 'ripple 1s ease-out infinite',
      },
      keyframes: {
        flow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 10px -10px rgba(0, 168, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px 5px rgba(0, 168, 255, 0.3)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        ripple: {
          '0%': { transform: 'scale(0.8)', opacity: 1 },
          '100%': { transform: 'scale(2)', opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
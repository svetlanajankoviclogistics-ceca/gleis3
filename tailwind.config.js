/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#d4af37',   // glavni zlatni
          50:  '#fdf8e8',
          100: '#f5e8c9',
          200: '#e8d19f',
          300: '#dbb975',
          400: '#cea14b',
          500: '#d4af37', // original
          600: '#b8972f',
          700: '#9c7f27',
          800: '#80671f',
          900: '#644f17',
        },
      },
      backdropBlur: { // glassmorphism
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        gold: '0 0 40px rgba(212,175,55,0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};
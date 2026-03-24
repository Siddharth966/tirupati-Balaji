/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        temple: {
          dark: '#0D0500',
          burgundy: '#1a0800',
          gold: '#D4A017',
          saffron: '#E8630A',
          cream: '#FFF8F0',
          lightGold: '#F0C040',
          orange: '#FF6B35',
          deepRed: '#8B1A00',
        }
      },
      fontFamily: {
        display: ['"Cinzel Decorative"', 'serif'],
        heading: ['"Cinzel"', 'serif'],
        body: ['"Lato"', 'sans-serif'],
        devanagari: ['"Tiro Devanagari Sanskrit"', '"Noto Serif Devanagari"', 'serif'],
      },
      backgroundImage: {
        'temple-gradient': 'linear-gradient(135deg, #0D0500 0%, #1a0800 40%, #2D0A00 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D4A017 0%, #F0C040 50%, #D4A017 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-slow': 'pulse 1.5s ease-in-out infinite',
        'ping-slow': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'counter': 'counter 1.5s ease-out forwards',
        'card-reveal': 'cardReveal 0.6s ease-out forwards',
        'step-reveal': 'stepReveal 0.7s ease-out forwards',
        'timeline-reveal': 'timelineReveal 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px #D4A01740' },
          '100%': { boxShadow: '0 0 40px #D4A01780, 0 0 80px #D4A01740' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        cardReveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        stepReveal: {
          '0%': { opacity: '0', transform: 'translateY(15px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        timelineReveal: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        counter: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      }
    },
  },
  plugins: [],
}
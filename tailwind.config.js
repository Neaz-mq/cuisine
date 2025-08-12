/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        'sm': '320px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.vertical-rl': { writingMode: 'vertical-rl' },
        '.vertical-lr': { writingMode: 'vertical-lr' },
      });
    },
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  safelist: [],
};

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
  plugins: [],
  // 🚀 Enable just-in-time mode and minify unused styles
  future: {
    hoverOnlyWhenSupported: true,
  },
  // 🧹 Helps remove unused CSS for production
  safelist: [], // add utility classes here if needed for dynamic usage
};

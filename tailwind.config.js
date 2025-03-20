/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],  // Add Poppins font family
      },
      // Custom screen sizes (breakpoints)
      screens: {
        'sm': '640px',  // Small devices (mobile)
        'md': '768px',  // Medium devices (tablet)
        'lg': '1024px', // Large devices (laptops)
        'xl': '1280px', // Extra large devices (large laptops)
        '2xl': '1440px', // Bigger devices
        '3xl': '1920px', // Custom 1920px breakpoint
      },
    },
  },
  plugins: [],
};

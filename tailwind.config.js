module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '200': '200px',
        '150': '150px',
        '900': '900px'
      },
      margin: {
        '0-auto': '0 auto'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};

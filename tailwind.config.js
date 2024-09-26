module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Target all JavaScript, TypeScript, and JSX/TSX files
    './public/index.html', // Include HTML files
  ],
  theme: {
    extend: {},
  },
  plugins: ['@tailwindcss/forms'],
}

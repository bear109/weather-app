/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans KR"'],
      },
      backgroundImage: {
        1: "url('/Images/bg-image-1.jpg')",
        2: "url('/Images/bg-image-2.jpg')",
      },
    },
  },
  plugins: [],
};

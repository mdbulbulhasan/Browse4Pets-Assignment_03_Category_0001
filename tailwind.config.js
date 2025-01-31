/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/images/background.jpg')",
      },
    },
  },
  plugins: [],
};

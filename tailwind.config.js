/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',  // Include all your files
  ],
  theme: {
    extend: {},
    colors: {

      white: '#FFFFFF',
      black: '#000000',
      red: '#DC2626',

      primary: {
        DEFAULT: '#89089F'
      },

      gray: {
        light: '#F5F5F5',
        0: '#F7F9FE',
        DEFAULT: '#828282', // Placeholder gray color
        primary: "#A6A6A6",
      },

    }
  },
  plugins: [],
}


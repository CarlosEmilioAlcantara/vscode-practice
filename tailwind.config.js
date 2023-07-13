/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      'light': '#fff',
      'dark': '#333',
      'darker': '#25252b',
      'gray': '#cccccc',
      'accent': '#0098ff',
      'accent-one': '#0071bc',
      'accent-two': '#337ab7',
      'hover': '#005893',
      'hover-one': '#b4a0ff',
      'button': '#0066b8',
      'button-hover': '#005ba4',
    },
    // fontFamily: {
    //   'body': 'Noto Sans, sans-serif',
    // },
    extend: {},
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  important: true,
  theme: {
    screens: {
      'sm': '0px',
      
      'lsm': '660px',
      // => @media (min-width: 640px) { ... }

      'lmd': '770px',

      'md': '990px',

      'lg': '1200px',
      // => @media (min-width: 1024px) { ... }

      // 'xl': '1200px',
      // // => @media (min-width: 1280px) { ... }
    },
    colors: {
      'light': '#fff',
      'dark': '#2c2c32',
      'darker': '#25252b',
      'less-gray': '#f5f5f5',
      'gray': '#cccccc',
      'accent': '#0098ff',
      'accent-one': '#0071bc',
      'accent-two': '#337ab7',
      'hover': '#005893',
      'hover-one': '#b4a0ff',
      'button': '#0066b8',
      'button-hover': '#005ba4',
      'burger-hover': '#0072be',
      'search-bar': 'rgba(255,255,255,.08)',
      'lightbulb': '#2e3192',
      'bug': '#37b34a',
      'git': '#f42534',
    },
    fontFamily: {
      'body': ['"Noto Sans", sans-serif'],
    },
    extend: {
      boxShadow: {
        '3xl': '0 3px 3px 0px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}


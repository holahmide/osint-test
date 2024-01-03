/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '84rem',
        '9xl': '88rem',
        '10xl': '92rem'
      }
    }
  },
  plugins: []
};

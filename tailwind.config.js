/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#f04f23',
        white: '#fcf8f1',
        cream: '#fdfbd4',
        navy: '#120E23',
      },
    },
  },
  plugins: [],
};

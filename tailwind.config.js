/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-menu': '#7A797D',
        'active-menu': '#5429FF',
        'your-balance': '#E0DEE5',
      },
      backgroundImage: {
        'balance-widget': "url('img/balance-widget.svg')",
      },
    },
  },
  plugins: [],
};

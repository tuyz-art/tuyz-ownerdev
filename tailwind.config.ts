/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '0': '0px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '7': '28px',
        '8': '32px',
        '9': '36px',
        '10': '40px',
      },
      colors: {
        primary: {
          lighter: '#D3E8FF',
          default: '#3B82F6',
          darker: '#1E40AF',
        },
        secondary: {
          lighter: '#FFE5B5',
          default: '#FBBF24',
          darker: '#F59E0B',
        },
        // Define other semantic tokens as needed
      },
    },
  },
  plugins: [],
};
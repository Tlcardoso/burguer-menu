/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        background: 'var(--background-color)',
        navBackground: 'var(--nav-background-color)',
        gray: '#EEEEEE',
        lightGray: '#F8F9FA',
      },
    },
  },
  plugins: [],
};


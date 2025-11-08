/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0D0D0D',
        'brand-gold': '#A89A86',
        'brand-light': '#EAEAEA',
      },
    },
  },
  plugins: [],
};

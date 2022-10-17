/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ], theme: {
    extend: {
      colors: {
        'black-russian-100': '#9898ec',
        'black-russian-200': '#6767a0',
        'black-russian-300': '#4d4d79',
        'black-russian-400': '#6767a0',
        'black-russian-500': '#363654',
        'black-russian-600': '#4f4f7a',
        'black-russian-700': '#363654',
        'black-russian-800': '#1e1e2e',
        'black-russian-900': '#1b1b2a',
      },

    },
  },
  plugins: [],
}

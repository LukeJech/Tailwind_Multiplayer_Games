/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'baby-blue': '#8ecae6',
        'medium-blue': '#219ebc',
        'dark-blue': '#023047',
        'yellow': '#ffb703',
        'orange': '#fb8500',
      }
    },
    
  },
  plugins: [],
}


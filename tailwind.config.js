/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        alizarin: '#e22443',
        turquoise: '#40e0d0'
      },
      outlineColor: {
        alizarin: '#e22443',
        turquoise: '#40e0d0'
      },
      backgroundColor: {
        alizarin: '#e22443',
        turquoise: '#40e0d0'
      },
      borderColor: {
        alizarin: '#e22443',
        turquoise: '#40e0d0'
      },
      fill: {
        alizarin: '#e22443',
        turquoise: '#40e0d0'
      }
    },
  },
  plugins: [],
}
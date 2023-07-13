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
        turquoise: '#24E2C3'
      },
      outlineColor: {
        alizarin: '#e22443',
        turquoise: '#24E2C3'
      },
      backgroundColor: {
        alizarin: '#e22443',
        turquoise: '#24E2C3'
      },
      borderColor: {
        alizarin: '#e22443',
        turquoise: '#24E2C3'
      },
      fill: {
        alizarin: '#e22443',
        turquoise: '#24E2C3'
      }
    },
  },
  plugins: [],
}
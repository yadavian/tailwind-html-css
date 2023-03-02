/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      screens: {
        xsm: '240px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        '15xl': ['5rem', { lineHeight: '1.5' }],
      }
    },
  },
  plugins: [],
}

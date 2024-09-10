/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url(img/img1.jpg)",
      }
    },
    fontFamily: {
      sans: ['"Roboto"', 'sans-serif']
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('daisyui'),
    function ({ addComponents}) {
      addComponents({
        '.btn-utama': {
          '@apply px-8 text-gray-800 bg-orange-400 border-0 rounded-full btn btn-primary hover:bg-gray-700 hover:text-white': {},
        }
      })
    }
  ],
}


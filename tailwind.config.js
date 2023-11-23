/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    letterSpacing: {
      widest: '.25em'
    },
    extend: {

      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
      },

      colors: {
        // Gradient 
        'check_bg1': 'hsl(192, 100%, 67%)',
        'check_bg2': 'hsl(280, 87%, 65%)',
        'check-gradient': ['var(--check-bg1)', 'var(--check-bg2)'],

        // Light Theme
          'bright_blue': 'hsl(220, 98%, 61%)',
          'white': 'hsl(0, 0%, 100%)',
          'very_light_gray': 'hsl(0, 0%, 98%)',
          'very_light_grayish_blue': 'hsl(236, 33%, 92%)',
          'light_grayish_blue': 'hsl(233, 11%, 84%)',
          'dark_grayish_blue': 'hsl(236, 9%, 61%)',
          'very_dark_grayish_blue': 'hsl(235, 19%, 35%)',

          // Dark Theme
          'very_dark_blue': 'hsl(235, 21%, 11%)',
          'very_dark_desaturated_blue': 'hsl(235, 24%, 19%)',
          'light_grayish_blue': 'hsl(234, 39%, 85%)',
          'light_grayish_blue_hover': 'hsl(236, 33%, 92%)',
          'dark_grayish_blue': 'hsl(234, 11%, 52%)',
          'very_dark_grayish_blue': 'hsl(233, 14%, 35%)',
          'very_dark_grayish_blue_darker': 'hsl(237, 14%, 26%)',
      },
    },

  },
  plugins: [],
}


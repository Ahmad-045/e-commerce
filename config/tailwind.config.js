const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'banner-1': "url('banner-01.jpg.webp')",
        'banner-2': "url('banner-02.jpg.webp')",
        'banner-3': "url('banner-03.jpg.webp')",
        'slide-1': "url('slide-01.jpg.webp')",
        'slide-2': "url('slide-02.jpg.webp')",
        'slide-3': "url('slide-03.jpg.webp')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
};

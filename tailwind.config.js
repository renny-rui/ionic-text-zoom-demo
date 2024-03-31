
/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [join(__dirname, 'src/**/*.{html,ts}'), ...createGlobPatternsForDependencies(__dirname)],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [
  
    {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {},
    },
    // ...
  ],
};
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
      backgroundImage: {
        profileBackground : "url(./img/600x200.jpg)"
      },
      screens: {
        'tall': { 'raw': '(max-width: 1400px)' },
        'semi-tall': { 'raw': '(max-width: 1200px)' },

        
      }
    }
  },
  plugins: [],
}

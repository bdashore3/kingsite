const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ], 
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        whitesmoke: '#f5f5f5',
        darkbg: '#17202b',
        lightbg: '#1b2532',
        fadebg: '#243142',
        twitch: '#593e85',
        email: '#3b64af',
        twitter: '#1da1f3',
        github: '#2b2727',
        blurple: '#7289DA',
        orange: {
          400: '#f6ad55'
        }
      },
      fontFamily: {
        header: ['Montserrat', 'Calibri'],
        navigation: ['Raleway', 'Calibri'],
        paragraph: ['Open Sans', 'Calibri']
      },
      height: {
        18: '4.5rem'
      },
      boxShadow: {
        drop: '0 0px 10px 8px #0f151c'
      },
      inset: {
        4: '1rem'
      },
      lineHeight: {
        'spread': '1.75'
      },
      minWidth: {
        '7xl': '85rem',
        '25v': '25vw',
        '30v': '30vw',
        '35v': '35vw',
        '40v': '40vw',
        '45v': '45vw',
        '50v': '50vw',
        '75v': '75vw'
      },
      maxWidth: {
        '7xl': '85rem',
        '25v': '25vw',
        '30v': '30vw',
        '35v': '35vw',
        '40v': '40vw',
        '45v': '45vw',
        '50v': '50vw',
        '75v': '75vw'
      },
      minHeight: {
        '20v': '20vh',
        '25v': '25vh',
        '30v': '30vh',
        '35v': '35vh',
        '40v': '40vh',
        '45v': '45vh',
        '50v': '50vh',
        '75v': '75vh'
      },
      maxHeight: {
        '20v': '20vh',
        '25v': '25vh',
        '30v': '30vh',
        '35v': '35vh',
        '40v': '40vh',
        '45v': '45vh',
        '50v': '50vh',
        '75v': '75vh'
      }
    }
  },
  variants: {
    extend: {
      textColor: ['visited']
    }
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('not-last', '&:not(:last-child)')
      addVariant('not-first', '&:not(:first-child)')
    })
  ]
};

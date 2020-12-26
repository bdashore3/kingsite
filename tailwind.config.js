module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        whitesmoke: '#f5f5f5',
        darkbg: '#0f151c',
        lightbg: '#243242',
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
        paragraph: ['Open Sans', 'Calibri'],
      },
      height: {
        '18': "4.5rem",
      },
      boxShadow: {
        drop: '0 0px 10px 8px #0f151c',
      },
      inset: {
        '4': '1rem',
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

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
      fontSize: {
        '6xl': '4rem',
        '7xl': '5rem',
        '8xl': '6rem',
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

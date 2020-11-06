module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
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
      },
      fontFamily: {
        header: ['Montserrat', 'Calibri'],
        paragraph: ['Raleway', 'Calibri'],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
      },
      height: {
        '18': "4.5rem",
      },
      boxShadow: {
        drop: '0 0px 10px 8px #0f151c',
      },
    },
  },
  variants: {},
  plugins: [],
}

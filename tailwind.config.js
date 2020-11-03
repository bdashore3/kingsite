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
        twitter: '#50abf1',
        github: '#2b2727',
        discord: '#36393f',
      },
      fontFamily: {
        header: ['Montserrat', 'Calibri'],
        paragraph: ['Futura', 'Calibri'],
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

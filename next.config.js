module.exports = {
  async redirects() {
    return [
      {
        source: '/socials',
        destination: '/#socials',
        permanent: true
      },
      {
        source: '/about',
        destination: '/#about',
        permanent: true
      },
      {
        source: '/work',
        destination: '/#work',
        permanent: true
      }
    ];
  }
};

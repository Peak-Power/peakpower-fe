module.exports = {
  images: {
    loader: 'imgix',
    path: 'https://deploy-preview-3--peakpwr.netlify.app/',
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
}

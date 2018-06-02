module.exports = {
  pathPrefix: `/webTemplate`,
  siteMetadata: {
    title: 'Home Page Header',
  },
  plugins: ['gatsby-plugin-react-helmet', {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
  }],
}

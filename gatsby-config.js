module.exports = {
  pathPrefix: `/webTemplate`,
  siteMetadata: {
    title: 'Oliver portfolio',
  },
  plugins: ['gatsby-plugin-react-helmet', {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
  },
  'gatsby-transformer-json',
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/src/data/`,
    }
  },
],
}

module.exports = {
  siteMetadata: {
    title: 'Home Page Header',
    menu: {
      about: 'About Me',
      contact: 'Contact Me',
    }
  },
  plugins: ['gatsby-plugin-react-helmet', {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
  }],
}

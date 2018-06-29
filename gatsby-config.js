module.exports = {
  siteMetadata: {
    title: 'Drink Worcester Beer',
    headerTitle: 'Worcester.beer'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
    'gatsby-plugin-react-helmet',
  ]
}

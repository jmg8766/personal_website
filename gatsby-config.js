module.exports = {
  siteMetadata: {
    title: `Justin Gottshall`,
    description: ``,
    author: `@jmg8766`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-137251873-1"
      }
    },
  ],
}

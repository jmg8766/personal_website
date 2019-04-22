module.exports = {
  siteMetadata: {
    title: `Justin Gottshall`,
    description: ``,
    author: `@jmg8766`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jgottshall.com`,
        short_name: `jg`,
        start_url: `/`,
        background_color: `white`,
        theme_color: `white`,
        display: `standalone`,
        icon: `src/images/icon.svg`,
      }
    },
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
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
  ],
}

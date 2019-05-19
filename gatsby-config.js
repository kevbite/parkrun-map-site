module.exports = {
  siteMetadata: {
    title: `Unofficial Parkrun Event Map`,
    siteUrl: `https://parkrun-map.com`,
    description: `The Unofficial Parkrun Event Map that helps you find parkruns.`,
    twitter: `@ParkrunMap`,
    keywords: `Parkrun,Running,Events,Map,Cancelled`
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-leaflet`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Unofficial Parkrun Event Map`,
        short_name: `Parkrun Map`,
        start_url: `/`,
        background_color: `#edffed`,
        theme_color: `#0d7a11`,
        display: `standalone`,
        icon: `src/images/icon.png`

      },
    }, {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-131581490-1"
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-apiserver',
      options: {
        typePrefix: 'internal__',
        url: `https://parkrun-map.azurewebsites.net/api/parkruns/geobox?lat=-180&lon=-90&lat=180&lon=90`,
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        },
        name: `parkruns`
      }
    }
  ],
}

module.exports = {
  siteMetadata: {
    title: `Unofficial Parkrun Event Map`,
    siteUrl: `https://parkrun-map.com`,
    description: `The Unofficial Parkrun Event Map that helps you find parkruns.`,
    twitter: `@ParkrunMap`,
  },
  plugins: [
  `gatsby-plugin-material-ui`,
  `gatsby-plugin-layout`,
  `gatsby-plugin-react-leaflet`,
  `gatsby-plugin-react-helmet`,
  {
      resolve:`gatsby-plugin-manifest`,
      options: {
        name: `Unofficial Parkrun Event Map`,
        short_name: `Parkrun Map`,
        start_url: `/`,
        background_color: `#edffed`,
        theme_color: `#0d7a11`,
        display: `standalone`,
        icon: `src/images/icon.png`

    },
  }
],
}
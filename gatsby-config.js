module.exports = {
  siteMetadata: {
    title: `Unofficial Parkrun Event Map`,
    siteUrl: `https://parkrun-map.com`,
    description: `The Unofficial Parkrun Event Map that helps you find parkruns.`,
    twitter: `@ParkrunMap`,
    keywords: `Parkrun,Running,Events,Map,Cancelled`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-layout`,
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
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-131581490-1",
      },
    },
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: "gatsby-source-apiserver",
      options: {
        typePrefix: "internal__",
        url: `https://parkrun-map.azurewebsites.net/api/parkruns/geobox?lat=-180&lon=-90&lat=180&lon=90`,
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        schemaType: {
          id: "String",
          name: "String",
          uri: "String",
          lat: 1,
          lon: 1,
          cancellations: [
            {
              date: "String",
              reason: "String",
            },
          ],
          course: {
            description:
              "1.5 laps (approximately) of the tarmac service road around the inside of the racecourse. Very flat, with few turns, making it a very fast course. On course map, start at green pin and head anti-clockwise round service road. Complete 1 full lap, then continue on round approximately another 1/2 lap to red Finish pin",
            googleMapIds: ["1i-izH2wIlADvEGjfrjQ-zSfg3yc"],
            terrain: ["Road", "Track"],
          },
          features: {
            wheelchairFriendly: true,
            buggyFriendly: true,
            visuallyImpairedFriendly: true,
            toilets: false,
            dogsAllowed: true,
            cafe: false,
            postRunCoffee: true,
            drinkingFountain: false,
            changingRooms: false,
            lockers: false,
            showers: false,
            bagDrop: true,
            babyChangingFacilities: true,
            carParking: true,
            cycleParking: true,
            carParkingOptions: ["FreeCarPark", "FreeStreetParking"],
            cycleParkingOptions: [
              "OpenCycleRacks",
              "CoveredCycleRacks",
              "OpenParking",
            ],
            recommendedBuggy: [
              "One"
            ],
          },
        },
        name: `parkruns`,
      },
    },
  ],
}

import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"
import icon from "../images/icon.png"

export default ({ pathname }) => {
  const {
    site: {
      siteMetadata: { siteUrl, title, description, twitter, keywords },
    },
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          siteUrl
          title
          description
          twitter
          keywords
        }
      }
    }
  `)

  return (
    <Helmet defaultTitle={title} titleTemplate={`%s | ${title}`}>
      <html lang="en" translate="no" />
      <link rel="canonical" href={`${siteUrl}${pathname}`} />
      <meta name="docsearch:version" content="2.0" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
      />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en" />
      <meta property="og:site_name" content={title} />
      <meta property="og:image" content={`${siteUrl}/images/og-image.png`} />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}/images/twitter-card-image.png`} />
    </Helmet>
  )
}

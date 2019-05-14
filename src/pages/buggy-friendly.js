import React, { useEffect } from "react"
import Index from './index';
import { useFilters } from '../filters/filters-context';
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

export default (props) => {
  const {
    site: {
      siteMetadata: { keywords },
    },
  } = useStaticQuery(graphql`
    query BuggySiteMetadata {
      site {
        siteMetadata {
          keywords
        }
      }
    }
  `);

  const { state: { filters }, setFilters } = useFilters();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setFilters({ ...filters, features: { ...filters.features, buggyFriendly: true } }), []);

  const title = "Buggy friendly parkruns";
  const description = "Find buggy friendly parkruns";

  return (<>
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={`${keywords},buggy,baby,prams,pushchairs`} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>

    <Index {...props} />
  </>)
};

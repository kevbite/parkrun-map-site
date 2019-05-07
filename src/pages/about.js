import React from "react"
import { Helmet } from "react-helmet"
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  container: {
    padding: 24,
    marginBottom: 56
  }
});

export default withStyles(styles)(({ classes }) => {
  const title = "About Parkrun-Map";
  const description = "Find out about Parkrun-Map.com";

  return (
    <div className={classes.container}>
      <Helmet>
        <title>About</title>
        <meta name="description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Helmet>

      <h1>
        The Unofficial Parkrun Event Map
      </h1>
      <p>
        We built the map originally to help ourself find parkruns when travelling and to make sure that they were not cancelled, however, the site has grown due to demands and request from others.
        </p>
      <p>
        We've had lots of requests to be able to filter on the map for different criteria, but a lot of this data is not publicly available, so we try our best to crowd source this data.
      </p>

      <h2>
        We need your help
      </h2>
      <p>
        Most of our data is crowd sourced, so the best way to help is by filling in a basic questionnaire which will eventually power the site.
      </p>
      <a href="https://forms.gle/AdAUA5PLCm9sWFKY7" title="Unofficial Parkrun Accessibility Questionnaire">Unofficial Parkrun Accessibility Questionnaire</a>
    </div>
  )
});

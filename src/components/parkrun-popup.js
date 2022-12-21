import React from 'react';
import { Popup } from "react-leaflet"
import ParkrunCancellations from './parkrun-cancellations';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ParkrunFeatures from './parkrun-features';
import ParkrunSpecialEvents from './parkrun-special-events';
import ParkrunTerrain from './parkrun-terrain';
import { Link } from "gatsby"

const styles = theme => ({
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  courseDescription: {
    maxHeight: 200,
    overflowY: 'scroll'
  },
  viewMoreButton: {
    color: '#fff !important',
    margin: 5
  },
  distance: {
    fontSize: '1rem',
    color: theme.palette.text.secondary
  }
});

const buildPath = ({ uri }) => {
  const split = uri.split('.');
  const parkrunPath = split[split.length - 1];
  const pagePath = `parkruns/${parkrunPath}`;

  return pagePath;
};

export default withStyles(styles)(({ parkrun, classes }) => {

  return (<Popup
    autoPanPaddingTopLeft={[5, 55]}
    autoPanPaddingBottomRight={[5, 5]}>
    <div className={classes.section1}>
      <Typography gutterBottom variant="h4">
        {parkrun.name} {parkrun.distance && <span className={classes.distance}>{parkrun.distance}km</span>}
      </Typography>
      <Typography className={classes.courseDescription} color="textSecondary">
        {parkrun.course.description}
      </Typography>
    </div>


    <div className={classes.section2}>
      <ParkrunTerrain terrain={parkrun.course.terrain} />
      <ParkrunFeatures features={parkrun.features} />
      <ParkrunSpecialEvents specialEvents={parkrun.specialEvents} />

    </div>

    {parkrun.cancellations.length > 0 &&
      <div>
        <Divider variant="middle" />
        <ParkrunCancellations cancellations={parkrun.cancellations} />
      </div>
    }

    <Divider variant="middle" />


    <div className={classes.section3}>
      <Button component={Link} className={classes.viewMoreButton} to={buildPath(parkrun)} variant="contained" color="primary" fullWidth>
        View more
      </Button>

    </div>

  </Popup >);
});

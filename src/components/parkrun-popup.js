import React from 'react';
import { Popup } from "react-leaflet"

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ParkrunFeatures from './parkrun-features';

const styles = theme => ({
  section1: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
  },
  section2: {
    margin: theme.spacing.unit * 2,
  },
  section3: {
    margin: `${theme.spacing.unit * 6}px ${theme.spacing.unit * 2}px ${theme.spacing.unit * 2}px`,
  },
  viewButton: {
    color: '#fff !important'
  }
});


export default withStyles(styles)(({ parkrun, classes }) => {

  return (<Popup>
    <div className={classes.section1}>
      <Typography gutterBottom variant="h4">
        {parkrun.name}
      </Typography>
      <Typography color="textSecondary">
        {parkrun.course.description}
      </Typography>
    </div>


    <div className={classes.section2}>
      <ParkrunFeatures features={parkrun.features} />
    </div>
    <Divider variant="middle" />

    <div className={classes.section3}>
      <Button className={classes.viewButton} target="_blank" href={parkrun.uri} variant="contained" color="primary" fullWidth>
        View on parkrun
      </Button>
    </div>

  </Popup >);
});

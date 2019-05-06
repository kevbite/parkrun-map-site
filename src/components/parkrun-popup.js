import React from 'react';
import { Popup } from "react-leaflet"

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ParkrunFeatures from './parkrun-features';
import orange from '@material-ui/core/colors/orange';

const styles = theme => ({
  section1: {
    margin: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 2}px`,
  },
  section2: {
    margin: theme.spacing.unit * 2,
  },
  courseDescription: {
    maxHeight: 200,
    overflowY: 'scroll'
  },
  cancellationsButton: {
    color: '#fff !important',
    margin: 5,
    backgroundColor: orange[500]
  },
  viewOnPakrunButton: {
    color: '#fff !important',
    margin: 5
  }
});


export default withStyles(styles)(({ parkrun, classes }) => {

  return (<Popup>
    <div className={classes.section1}>
      <Typography gutterBottom variant="h4">
        {parkrun.name}
      </Typography>
      <Typography className={classes.courseDescription} color="textSecondary">
        {parkrun.course.description}
      </Typography>
    </div>


    <div className={classes.section2}>
      <ParkrunFeatures features={parkrun.features} />
    </div>
    <Divider variant="middle" />


    <div className={classes.section3}>
      {parkrun.cancellations.length > 0 &&
        <Button className={classes.cancellationsButton} target="_blank" href="https://www.parkrun.org.uk/cancellations/" variant="contained" fullWidth>Cancellations</Button>
      }
      <Button className={classes.viewOnPakrunButton} target="_blank" href={parkrun.uri} variant="contained" color="primary" fullWidth>
        View on parkrun
      </Button>

    </div>

  </Popup >);
});

import React from 'react';
import orange from '@material-ui/core/colors/orange';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    color: '#fff !important',
    margin: 5,
    backgroundColor: orange[500]
  }
});

export default withStyles(styles)(({ classes }) => {
  return (
    <Button className={classes.button} target="_blank" href="https://www.parkrun.org.uk/cancellations/" variant="contained" fullWidth>
      View All Cancellations
    </Button>);
});
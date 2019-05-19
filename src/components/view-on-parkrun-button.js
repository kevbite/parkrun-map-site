import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  button: {
    color: '#fff !important',
    margin: 5
  }
});

export default withStyles(styles)(({ uri, classes }) => {
  return (<Button className={classes.button} target="_blank" href={uri} variant="contained" color="primary" fullWidth>
    View on parkrun
    </Button>)
});
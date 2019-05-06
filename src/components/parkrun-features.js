import React from 'react';
import { availableFilters } from '../components/available-filters';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  icon: {
    margin: 5
  }
});

export default withStyles(styles)(({ features, classes }) => {
  return (<div>
    {availableFilters.filter(x =>
      features[x.propName]
    ).map(x => <x.icon className={classes.icon} />)}
  </div>);
});



import React from 'react';
import { availableFilters } from '../components/available-filters';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  icon: {
    margin: 5
  }
});

export default withStyles(styles)(({ features, classes }) => {
  return (<div>
    {availableFilters.filter(x =>
      features[x.propName]
    ).map(x => <Tooltip key={x.propName} disableFocusListener disableTouchListener title={x.name}>
      <x.icon className={classes.icon} />
    </Tooltip>)}
  </div>);
});



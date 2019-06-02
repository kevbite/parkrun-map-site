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
  return (<>
    {
      availableFilters.filter(x =>
        features[x.propName]
      ).map(x => (
        <Tooltip
          key={`feature-${x.propName}`}
          title={x.name}
          disableFocusListener
          disableTouchListener>
          <span>
            <x.icon className={classes.icon} />
          </span>
        </Tooltip>))
    }
  </>);
});



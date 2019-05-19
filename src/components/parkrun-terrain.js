import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import TerrainIcon from './terrain-icon';

const styles = theme => ({
  icon: {
    margin: 5
  }
});


export default withStyles(styles)(({ classes, terrain }) => {

  return (<>
    {terrain.map(x => <Tooltip key={x} disableFocusListener disableTouchListener title={x}>
      <TerrainIcon name={x} className={classes.icon} />
    </Tooltip>)}
  </>);
});



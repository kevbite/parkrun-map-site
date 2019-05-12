import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import TerrainIcon from '@material-ui/icons/Terrain';
import RoadIcon from 'mdi-react/RoadIcon';
import TreeIcon from 'mdi-react/TreeIcon';
import BeachIcon from 'mdi-react/BeachIcon';
import RoadVariantIcon from 'mdi-react/RoadVariantIcon';
import TextureIcon from '@material-ui/icons/Texture';

const styles = theme => ({
  icon: {
    margin: 5
  }
});

export const terrainIcons = {
  "Road": props => <RoadIcon {...props} />,
  "Grass": props => <TreeIcon {...props} />,
  "Trail": props => <TerrainIcon {...props} />,
  "Turf": props => <TextureIcon {...props} />,
  "Track": props => <RoadVariantIcon {...props} />,
  "Beach": props => <BeachIcon {...props} />
};

const renderIcon = (name, className) => {
  const Icon = terrainIcons[name];

  return (<Icon className={className} />);
}

export default withStyles(styles)(({ classes, terrain }) => {

  return (<>
    {terrain.map(x => <Tooltip key={x} disableFocusListener disableTouchListener title={x}>
      {renderIcon(x, classes.icon)}
    </Tooltip>)}
  </>);
});



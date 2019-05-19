import React from 'react';
import TerrainIcon from '@material-ui/icons/Terrain';
import RoadIcon from 'mdi-react/RoadIcon';
import TreeIcon from 'mdi-react/TreeIcon';
import BeachIcon from 'mdi-react/BeachIcon';
import RoadVariantIcon from 'mdi-react/RoadVariantIcon';
import TextureIcon from '@material-ui/icons/Texture';

export const terrainIcons = {
  "Road": props => <RoadIcon {...props} />,
  "Grass": props => <TreeIcon {...props} />,
  "Trail": props => <TerrainIcon {...props} />,
  "Turf": props => <TextureIcon {...props} />,
  "Track": props => <RoadVariantIcon {...props} />,
  "Beach": props => <BeachIcon {...props} />
};

export default (props) => {
  const { name } = props;
  const Icon = terrainIcons[name];

  return (<Icon {...props} />);
}
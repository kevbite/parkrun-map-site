import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import { useFilters } from '../filters/filters-context';
import { availableFilters } from '../components/available-filters';
import { terrainIcons } from '../components/parkrun-terrain';

const styles = theme => ({
  header: {
    paddingLeft: 16
  },
  container: {
    display: 'flex',
    padding: 24,
    justifyContent: 'center',
    marginBottom: 56
  },
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

export default withStyles(styles)(({ classes }) => {
  const { state: { filters }, setFilters } = useFilters();

  const onFeatureFilterChanged = name => () => {
    const value = !filters.features[name];

    const newFeatures = {
      ...filters.features
    };
    const newFilters = {
      ...filters,
      newFeatures
    };
    newFilters.features[name] = value;
    setFilters(newFilters);
  };

  const onTerrainFilterChanged = name => () => {

    const terrain = filters.terrain.filter(x => x !== name);

    if (!filters.terrain.includes(name)) {
      terrain.push(name);
    }

    const newFilters = {
      ...filters,
      terrain
    };

    setFilters(newFilters);
  };


  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <h1 className={classes.header}>Filters</h1>
        <List subheader={<h2 className={classes.header}>Terrain</h2>} >
          {Object.keys(terrainIcons).map(terrainName => <ListItem key={`terrain-${terrainName}`} >
            <>
              <ListItemIcon>
                {terrainIcons[terrainName]()}
              </ListItemIcon>
              <ListItemText primary={terrainName} onClick={onTerrainFilterChanged(terrainName)} />
              <ListItemSecondaryAction>
                <Switch
                  onChange={onTerrainFilterChanged(terrainName)}
                  checked={filters.terrain.includes(terrainName)}
                />
              </ListItemSecondaryAction>
            </>
          </ListItem>)}
        </List>
        <List subheader={<h2 className={classes.header}>Features</h2>} className={classes.root}>
          {availableFilters.map(filter => <ListItem key={`features-${filter.propName}`} >
            <>
              <ListItemIcon>
                <filter.icon />
              </ListItemIcon>
              <ListItemText primary={filter.name} onClick={onFeatureFilterChanged(filter.propName)} />
              <ListItemSecondaryAction>
                <Switch
                  onChange={onFeatureFilterChanged(filter.propName)}
                  checked={filters.features[filter.propName]}
                />
              </ListItemSecondaryAction>
            </>
          </ListItem>)}
        </List>
      </div>
    </div>
  );
});

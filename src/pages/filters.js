import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Switch from '@material-ui/core/Switch';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import { useFilters } from '../filters/filters-context';

const styles = theme => ({
  container: {
    display: 'flex',
    padding: 24,
    justifyContent: 'center'
  },
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
});

export default withStyles(styles)(({ classes }) => {
  const { state: { filters }, setFilters } = useFilters();


  const onFilterChanged = name => () => {
    const value = !filters[name];
    const newFilters = {
      ...filters,
    };
    newFilters[name] = value;
    setFilters(newFilters);
  };

  const availableFilters = [
    { name: 'Wheelchair Friendly', propName: 'wheelchairFriendly', icon: <AccessibleForwardIcon /> },
    { name: 'Buggy Friendly', propName: 'buggyFriendly', icon: <ChildFriendlyIcon /> }
  ];

  return (
    <div className={classes.container}>
      <List subheader={<h1>Filters</h1>} className={classes.root}>
        {availableFilters.map(x => <ListItem onClick={onFilterChanged(x.propName)}>
          <ListItemIcon>
            {x.icon}
          </ListItemIcon>
          <ListItemText primary={x.name} />
          <ListItemSecondaryAction>
            <Switch
              onChange={onFilterChanged(x.propName)}
              checked={filters[x.propName]}
            />
          </ListItemSecondaryAction>
        </ListItem>)}
      </List>
    </div>
  );
});

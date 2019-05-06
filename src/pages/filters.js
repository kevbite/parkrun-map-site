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


  const onFilterChanged = name => () => {
    const value = !filters[name];
    const newFilters = {
      ...filters,
    };
    newFilters[name] = value;
    setFilters(newFilters);
  };

  return (
    <div className={classes.container}>
      <List subheader={<h1 className={classes.header}>Filters</h1>} className={classes.root}>
        {availableFilters.map(filter => <ListItem key={filter.propName} onClick={onFilterChanged(filter.propName)}>
          <>
            <ListItemIcon>
              <filter.icon />
            </ListItemIcon>
            <ListItemText primary={filter.name} />
            <ListItemSecondaryAction>
              <Switch
                onChange={onFilterChanged(filter.propName)}
                checked={filters[filter.propName]}
              />
            </ListItemSecondaryAction>
          </>
        </ListItem>)}
      </List>
    </div>
  );
});

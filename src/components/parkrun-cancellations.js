import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WarningIcon from '@material-ui/icons/Warning';

function generate(element) {
  return [0, 1, 2].map(value =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
});

export default withStyles(styles)(({ classes, cancellations }) => {

  return (
    <div className={classes.demo}>
      <List>
        {cancellations.map(x =>
          <ListItem key={new Date(x.date).getTime()}>
            <ListItemIcon>
              <WarningIcon />
            </ListItemIcon>
            <ListItemText
              primary={new Date(x.date).toDateString()}
            />
          </ListItem>)
        }
      </List>
    </div>)
});
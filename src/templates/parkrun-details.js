import React from "react"
import { graphql } from "gatsby"
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ParkrunCancellations from '../components/parkrun-cancellations';
import { availableFilters } from '../components/available-filters';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import TerrainIcon from '../components/terrain-icon';
import ViewOnParkrunButton from '../components/view-on-parkrun-button';

const styles = theme => ({
  container: {
    display: 'flex',
    padding: 24,
    justifyContent: 'center',
    marginBottom: 56
  },
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    padding: '0px 16px'
  },
  description: {
    marginBottom: 16
  }
});

export default withStyles(styles)(({ classes, data: { internalParkruns: parkrun } }) => {
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <h1 className={classes.header}>{parkrun.name}</h1>
        <Typography className={classes.description} color="textSecondary">
          {parkrun.course.description}
        </Typography>
        {parkrun.cancellations.length > 0 &&
          <div>
            <Divider variant="middle" />
            <ParkrunCancellations
              header={<h2>Cancellations</h2>}
              cancellations={parkrun.cancellations} />

          </div>}
        <RenderFeatures features={parkrun.features} />
        <RenderTerrain terrain={parkrun.course.terrain} />
        <Divider variant="middle" />
        <ViewOnParkrunButton uri={parkrun.uri} />
      </div>
    </div>
  )
});

export const query = graphql`
  query($id: String!) {
        internalParkruns(id: {eq: $id }) {
        id
      name
      cancellations {
        date
        reason
      }
      uri
      course {
        description
        terrain
      }
      features {
        wheelchairFriendly
        buggyFriendly
        visuallyImpairedFriendly
        toilets
        dogsAllowed
        cafe
        postRunCoffee
        drinkingFountain
        changingRooms
        lockers
        showers
        bagDrop
        babyChangingFacilities
        carParking
        cycleParking
      }
    }
  }
`



const RenderFeatures = ({ features }) => {
  const parkrunFeatures = availableFilters.filter(x =>
    features[x.propName]
  );

  if (parkrunFeatures.length === 0) {
    return null;
  }

  return (<div>
    <List subheader={<h2>Features</h2>}>
      {parkrunFeatures.map(x => <ListItem key={x.propName}>
        <ListItemIcon>
          <x.icon />
        </ListItemIcon>
        <ListItemText
          primary={x.name}
        />
      </ListItem>)}
    </List>
  </div>);
};

const RenderTerrain = ({ terrain }) => {

  if (terrain.length === 0) {
    return null;
  }

  return (<div>
    <List subheader={<h2>Terrain</h2>}>
      {terrain.map(x => <ListItem key={x}>
        <ListItemIcon>
          <TerrainIcon name={x} />
        </ListItemIcon>
        <ListItemText
          primary={x}
        />
      </ListItem>)}
    </List>
  </div>);
};
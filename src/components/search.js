import AlgoliaPlaces from 'algolia-places-react';
import { useLocation } from '../location/location-context';
import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  searchWrapper: {
    zIndex: 999,
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    maxWidth: 350
  }
});

export default withStyles(styles)(({ classes }) => {
  const { setLocation } = useLocation();
  const onChange = ({ suggestion: { latlng } }) => {
    const { lat: latitude, lng: longitude } = latlng;
    console.log(`{ ${latitude}, ${longitude} }`);
    setLocation({ latitude, longitude });
  };
  return (
    <div className={classes.searchWrapper}>
      <AlgoliaPlaces
        placeholder='Type a city or postcode'
        options={{
          appId: 'plYMZAXKIUOD',
          apiKey: '7847fa0234915a5b956c4bc6cc28a1b9',
          type: 'city',
          useDeviceLocation: true
        }}
        onChange={onChange}
      />
    </div>
  );
});
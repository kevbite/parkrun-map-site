import { useLocation } from '../location/location-context';
import React, { useEffect, useState } from 'react';
import GooglePlacesAutocomplete, { geocodeByPlaceId } from 'react-google-places-autocomplete';

const styles = {
  zIndex: 999,
  position: 'absolute',
  top: 10,
  left: 10,
  right: 10,
  maxWidth: 350
};

export default ({ classes }) => {
  const [value, setValue] = useState(null);
  const { setLocation } = useLocation();

  useEffect(() => {
    (async () => {
      if(value){
        const [{geometry: {location: { lat, lng }}}] = await geocodeByPlaceId(value.value.place_id)
        const latitude = lat();
        const longitude = lng();
        setLocation({ latitude, longitude });
      }
    })();
  }, [setLocation, value])

  return (
    <div style={styles}>
      <GooglePlacesAutocomplete
        apiKey="AIzaSyAvs9kC7xNv1oQbkjzeC106u8s43r5HoXA"
        selectProps={{
          value,
          onChange: setValue,
        }}
      />
    </div>
  );
};
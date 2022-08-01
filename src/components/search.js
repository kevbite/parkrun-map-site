import { useLocation } from '../location/location-context';
import React, { useState } from 'react';
import GooglePlacesAutocomplete, { geocodeByPlaceId } from 'react-google-places-autocomplete';

const styles = {
  zIndex: 999,
  position: 'absolute',
  top: 10,
  left: 10,
  right: 10,
  maxWidth: 350
};

export default () => {
  const [value, setValue] = useState(null);
  const { setLocation } = useLocation();


  const onChange = async (value) =>{
    const [{geometry: {location: { lat, lng }}}] = await geocodeByPlaceId(value.value.place_id)

    const latitude = lat();
    const longitude = lng();

    setValue(value);
    setLocation({ latitude, longitude });
  }

  return (
    <div style={styles}>
      <GooglePlacesAutocomplete
        apiKey="AIzaSyAvs9kC7xNv1oQbkjzeC106u8s43r5HoXA"
        selectProps={{
          value,
          onChange,
        }}
      />
    </div>
  );
};
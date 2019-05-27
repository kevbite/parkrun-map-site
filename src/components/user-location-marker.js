import React from 'react';
import { Marker, Popup } from "react-leaflet"
import { blueIcon } from './icons';

export default ({ location: { location: { latitude, longitude } } }) => {

  return (<Marker position={[latitude, longitude]} icon={blueIcon}>
    <Popup>
      You are here!
    </Popup>
  </Marker>);
};

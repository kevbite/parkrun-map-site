import React from 'react';
import { Marker, Popup } from "react-leaflet"
import { greenIcon, orangeIcon, redIcon } from './icons';

const getPinIcon = (parkrun) => {

  function calculateNextSaturday() {
    var now = new Date();
    now.setDate(now.getDate() + (6 + (7 - now.getDay())) % 7);
    now.setHours(0, 0, 0, 0);

    return now;
  }

  const nextSaturday = calculateNextSaturday();

  const cancellations = parkrun.cancellations.map(x => {
    var d = new Date(x.date);
    d.setHours(0, 0, 0, 0);
    return d;
  });

  if (cancellations.findIndex(x => x.valueOf() === nextSaturday.valueOf()) >= 0) {
    return redIcon;
  } else if (cancellations.length) {
    return orangeIcon;
  }

  return greenIcon;
};

export default ({ parkrun }) => {

  return (<Marker key={parkrun.id} position={[parkrun.lat, parkrun.lon]} icon={getPinIcon(parkrun)}>
    <Popup>{parkrun.name}</Popup>
  </Marker>);
};

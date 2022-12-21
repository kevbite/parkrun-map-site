import React from 'react';
import { Marker } from "react-leaflet"
import { greenIcon, orangeIcon, redIcon, goldIcon, violetIcon } from './icons';
import ParkrunPopup from './parkrun-popup';
import { useFilters } from '../filters/filters-context';

const getPinIcon = (parkrun, specialEvents) => {


  if(specialEvents.christmasDay){
    return goldIcon;
  }

  if(specialEvents.newYearsDay){
    return violetIcon;
  }

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
  const { state: { filters: { specialEvents } } } = useFilters();

  return (<Marker key={parkrun.id} position={[parkrun.lat, parkrun.lon]} icon={getPinIcon(parkrun, specialEvents)}>
    <ParkrunPopup parkrun={parkrun} />
  </Marker>);
};

import React, { useState, useEffect } from "react";
import { Map, TileLayer } from "react-leaflet"
import { useParkruns } from "../parkruns/parkruns-context"
import { useLocation } from '../location/location-context';
import { useFilteredParkruns } from '../hooks/filtered-parkruns';
import ParkrunMarker from '../components/parkrun-marker';

export default () => {
  const [mapBounds, setMapBounds] = useState({
    south: 0,
    east: 0,
    north: 0,
    west: 0
  });

  const {
    requestParkruns
  } = useParkruns();

  const {
    state: { location: { latitude, longitude }, zoom },
    setLocation,
    setZoom
  } = useLocation();

  const {
    parkruns
  } = useFilteredParkruns();

  const position = [latitude, longitude]

  const handleOnMoveend = async e => {
    const bounds = e.target.getBounds();
    const center = e.target.getCenter();

    setZoom({ zoom: e.target.getZoom() });
    setLocation({ latitude: center.lat, longitude: center.lng });
    setMapBounds({
      south: bounds.getSouth(),
      east: bounds.getEast(),
      north: bounds.getNorth(),
      west: bounds.getWest()
    });
  };

  useEffect(() => {
    requestParkruns(mapBounds);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mapBounds.south, mapBounds.east, mapBounds.north, mapBounds.west]);

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <Map
      debounceMoveend={true}
      onMoveend={handleOnMoveend}
      center={position}
      zoom={zoom}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 56,
        width: "100%",
      }}
    >
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {parkruns.map(parkrun => (
        <ParkrunMarker key={parkrun.id} parkrun={parkrun} />
      ))}
    </Map>
  )
}

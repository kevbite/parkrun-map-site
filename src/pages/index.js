import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet"
import { useParkruns } from "../parkruns/parkruns-context"
import { useLocation } from '../location/location-context';

export default () => {
  const {
    state: { parkruns },
    requestParkruns
  } = useParkruns();

  const {
    state: { location: { latitude, longitude }, zoom },
    setLocation,
    setZoom
  } = useLocation();

  const position = [latitude, longitude]

  const handleOnMoveend = async e => {
    const bounds = e.target.getBounds();
    const center = e.target.getCenter();

    setLocation({ latitude: center.lat, longitude: center.lng });

    await requestParkruns(
      bounds.getSouth(),
      bounds.getEast(),
      bounds.getNorth(),
      bounds.getWest()
    );
  };

  const handleOnZoomed = (e) => {
    setZoom({ zoom: e.target.getZoom() });

  };

  return (
    <Map
      onMoveend={handleOnMoveend}
      onzoomend={handleOnZoomed}
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
        <Marker key={parkrun.id} position={[parkrun.lat, parkrun.lon]}>
          <Popup>{parkrun.name}</Popup>
        </Marker>
      ))}
    </Map>
  )
}

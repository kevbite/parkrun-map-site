import React from "react"
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import { useParkruns } from '../parkruns/parkruns-context';
export default () => {

  const {
    state: { parkruns },
    requestParkruns,
  } = useParkruns();

  const position = [53.651154, -1.4738869];

  const handleOnMoveend = async (e) => {
    const bounds = e.target.getBounds();

    await requestParkruns(bounds.getSouth(), bounds.getEast(), bounds.getNorth(), bounds.getWest())();
  };

  return (
    <Map
      onMoveend={handleOnMoveend}
      center={position}
      zoom={13}
      style={{ position: "absolute", top: 0, left: 0, bottom: 56, width: "100%" }}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {parkruns.map(parkrun => (
        <Marker key={parkrun.id} position={[parkrun.lat, parkrun.lon]}>
          <Popup>
            {parkrun.name}
          </Popup>
        </Marker>))}
    </Map>);
};
import React, { useRef, useEffect } from "react";
import { Map, TileLayer, ZoomControl } from "react-leaflet"
import { useParkruns } from "../parkruns/parkruns-context"
import { useLocation } from '../location/location-context';
import { useFilteredParkruns } from '../hooks/filtered-parkruns';
import ParkrunMarker from '../components/parkrun-marker';
import UserLocationMarker from '../components/user-location-marker';
import Search from '../components/search';

export default () => {
  const {
    requestParkruns
  } = useParkruns();

  const {
    state: { location: { latitude, longitude }, zoom, userLocation },
    setLocation,
    setZoom
  } = useLocation();

  const mapRef = useRef(null);

  const closePopups = () => {
    if (mapRef.current) {
      mapRef.current.leafletElement.closePopup();
    }
  };

  useEffect(() => {
    closePopups();
  }, [latitude, longitude, zoom])

  const {
    parkruns
  } = useFilteredParkruns();

  const position = [latitude, longitude]

  const handleOnDragend = async e => {
    closePopups();
    const center = e.target.getCenter();
    setLocation({ latitude: center.lat, longitude: center.lng });
  };

  const handleOnZoomend = async e => {
    closePopups();
    setZoom({ zoom: e.target.getZoom() });
  };

  useEffect(() => {
    const map = mapRef.current;
    if (map != null) {
      const bounds = map.leafletElement.getBounds();
      requestParkruns({
        south: bounds.getSouth(),
        east: bounds.getEast(),
        north: bounds.getNorth(),
        west: bounds.getWest()
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [latitude, longitude, zoom]);

  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <div>
      <Search />
      <Map
        ref={mapRef}
        onDragend={handleOnDragend}
        onZoomend={handleOnZoomend}
        center={position}
        zoom={zoom}
        zoomControl={false}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 56,
          width: "100%",
        }}
      >
        <ZoomControl position={'bottomright'} />
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {parkruns.map(parkrun => (
          <ParkrunMarker key={parkrun.id} parkrun={parkrun} />
        ))}
        {userLocation && <UserLocationMarker location={userLocation} />}
      </Map>
    </div>

  )
}

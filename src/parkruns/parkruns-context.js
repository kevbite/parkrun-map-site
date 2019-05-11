import React from "react"
import union from '@turf/union';
import bboxPolygon from '@turf/bbox-polygon';
import booleanContains from '@turf/boolean-contains';
import { polygon as turfPolygon } from "@turf/helpers";

const ParkrunsContext = React.createContext();

const requestParkrunsType = "REQUEST_PARKRUNS";
const receiveParkrunsType = "RECEIVE_PARKRUNS";

function parkrunsReducer(state, action) {
  switch (action.type) {
    case requestParkrunsType: {
      const searchedPolygon = union(state.searchedPolygon || action.polygon, action.polygon);

      return {
        ...state,
        isLoading: true,
        searchedPolygon
      };
    }
    case receiveParkrunsType: {
      const parkruns = state.parkruns.reduce((acc, parkrun) => {
        if (!acc.find(x => x.id === parkrun.id)) {
          acc.push(parkrun)
        }

        return acc
      }, action.parkruns);

      return {
        ...state,
        parkruns: parkruns,
        isLoading: false,
      };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

export function ParkrunsProvider(props) {
  const [state, dispatch] = React.useReducer(parkrunsReducer, {
    parkruns: [],
    isLoading: false,
  })
  const value = React.useMemo(() => [state, dispatch], [state])
  return <ParkrunsContext.Provider value={value} {...props} />
}
const shouldSendRequest = ({ state: { isLoading, searchedPolygon }, bounds: { south, west, north, east } }) => {
  const polygon = bboxPolygon([south, west, north, east]);

  if (!isLoading && searchedPolygon) {
    if (searchedPolygon.type === "MultiPolygon") {
      if (searchedPolygon.geometry.coordinates.some(x => booleanContains(turfPolygon(x), polygon))) {
        return false;
      }
    }
    else if (searchedPolygon.geometry.type === "Polygon") {
      if (booleanContains(searchedPolygon, polygon)) {
        return false;
      }
    }
  }

  return true;
}
export function useParkruns() {
  const context = React.useContext(ParkrunsContext);
  if (!context) {
    throw new Error(`useParkruns must be used within a ParkrunsProvider`);
  }

  const [state, dispatch] = context;

  const requestParkruns = async ({ south, west, north, east }) => {

    if (!shouldSendRequest({ state, bounds: { south, west, north, east } })) {
      return;
    }

    south = Math.floor(south);
    west = Math.floor(west);
    north = Math.ceil(north);
    east = Math.ceil(east);

    dispatch({ type: requestParkrunsType, polygon: bboxPolygon([south, west, north, east]) });

    const url = `https://parkrun-map.azurewebsites.net/api/parkruns/geobox?lat=${south}&lon=${west}&lat=${north}&lon=${east}`;
    const response = await fetch(url);
    const parkruns = await response.json();

    dispatch({ type: receiveParkrunsType, parkruns });
  };

  return {
    state,
    dispatch,
    requestParkruns,
  };
}

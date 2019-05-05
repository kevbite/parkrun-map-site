import React from "react"

const ParkrunsContext = React.createContext();

const requestParkrunsType = "REQUEST_PARKRUNS";
const receiveParkrunsType = "RECEIVE_PARKRUNS";

function parkrunsReducer(state, action) {
  switch (action.type) {
    case requestParkrunsType: {
      return {
        ...state,
        isLoading: true,
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

const requests = [];

export function useParkruns() {
  const context = React.useContext(ParkrunsContext);
  if (!context) {
    throw new Error(`useParkruns must be used within a ParkrunsProvider`);
  }

  const [state, dispatch] = context;

  const requestParkruns = async ({ south, west, north, east }) => {

    if (requests.some(x => south >= x.south && west >= x.west && north <= x.north && east <= x.east)) {
      return;
    }

    south = Math.floor(south * 10) / 10;
    west = Math.floor(west * 10) / 10;
    north = Math.ceil(north * 10) / 10;
    east = Math.ceil(east * 10) / 10;

    requests.push({ south, west, north, east });

    dispatch({ type: requestParkrunsType });

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

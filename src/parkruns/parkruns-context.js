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

  const requestParkruns = async ({ south, east, north, west }) => {

    if (requests.some(x => x.south === south && x.east === east && x.north === north && x.west === west)) {
      return;
    }

    requests.push({ south, east, north, west });

    dispatch({ type: requestParkrunsType });

    const url = `https://parkrun-map.azurewebsites.net/api/parkruns/geobox?lat=${south}&lon=${east}&lat=${north}&lon=${west}`;
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

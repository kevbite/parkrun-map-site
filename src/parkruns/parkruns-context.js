import React from 'react'

const ParkrunsContext = React.createContext()

const requestParkrunsType = 'REQUEST_PARKRUNS';
const receiveParkrunsType = 'RECEIVE_PARKRUNS';

function parkrunsReducer(state, action) {
  switch (action.type) {
    case requestParkrunsType: {
      return {
        ...state,
        isLoading: true
      };
    }
    case receiveParkrunsType: {
      const parkruns = state.parkruns.reduce((acc, parkrun) => {
        if (!acc.find(x => x.id === parkrun.id)) {
          acc.push(parkrun);
        }

        return acc;
      }, action.parkruns);

      return {
        ...state,
        parkruns: parkruns,
        isLoading: false
      };
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}

export function ParkrunsProvider(props) {
  const [state, dispatch] = React.useReducer(parkrunsReducer, { parkruns: [], isLoading: false })
  const value = React.useMemo(() => [state, dispatch], [state])
  return <ParkrunsContext.Provider value={value} {...props} />
}

export function useParkruns() {
  const context = React.useContext(ParkrunsContext)
  if (!context) {
    throw new Error(`useParkruns must be used within a ParkrunsProvider`)
  }

  const [state, dispatch] = context;

  const requestParkruns = (lat1, lon1, lat2, lon2) => async () => {

    dispatch({ type: requestParkrunsType });

    const url = `https://parkrun-map.azurewebsites.net/api/parkruns/geobox?lat=${lat1}&lon=${lon1}&lat=${lat2}&lon=${lon2}`
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

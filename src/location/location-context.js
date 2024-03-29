import React, { useEffect, useCallback, useMemo } from "react"

const requestLocationType = 'REQUEST_LOCATION';
const receiveLocationType = 'RECEIVE_LOCATION';
const setLocationType = 'SET_LOCATION';
const setZoomType = 'SET_ZOOM';

const LocationContext = React.createContext();

const reducer = (state, action) => {
  if (action.type === requestLocationType) {
    return {
      ...state,
      isLoading: true,
      isLoaded: false
    };
  }

  if (action.type === receiveLocationType) {
    return {
      ...state,
      userLocation: {
        location: action.location,
        accuracy: action.accuracy
      },
      location: action.location,
      isLoading: false,
      isLoaded: true
    };
  }

  if (action.type === setLocationType) {
    return {
      ...state,
      location: action.location
    }
  }

  if (action.type === setZoomType) {
    return {
      ...state,
      zoom: action.zoom
    }
  }

  return state;
};

const requestLocation = (dispatch) => {

  dispatch({ type: requestLocationType });

  if (navigator && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const location = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        const accuracy = position.coords.accuracy;

        dispatch({ type: receiveLocationType, location, accuracy });
      }
    );
  }
};

export function LocationProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, {
    location: { latitude: 51.509865, longitude: -0.118092 },
    isLoading: false,
    isLoaded: false,
    zoom: 13
  });

  const value = React.useMemo(() => [state, dispatch], [state]);

  useEffect(() => requestLocation(dispatch), []);

  return <LocationContext.Provider value={value} {...props} />
}

export function useLocation() {
  const context = React.useContext(LocationContext)
  if (!context) {
    throw new Error(`useLocation must be used within a LocationProvider`);
  }

  const [state, dispatch] = context;

  const setLocation = useCallback(({ latitude, longitude }) => {
    if (state.location.latitude === latitude && state.location.longitude === longitude) {
      return;
    }

    dispatch({ type: 'SET_LOCATION', location: { latitude, longitude } });
  }, [dispatch, state.location.latitude, state.location.longitude]);

  const setZoom = useCallback(({ zoom }) => {
    if (state.zoom === zoom) {
      return;
    }
    dispatch({ type: 'SET_ZOOM', zoom });
  }, [dispatch, state.zoom]);

  return useMemo(() => ({
    state,
    dispatch,
    setLocation,
    setZoom
  }), [dispatch, setLocation, setZoom, state]);
}

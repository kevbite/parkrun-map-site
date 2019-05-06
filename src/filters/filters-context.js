import React from "react"
import { availableFilters } from '../components/available-filters';

const FiltersContext = React.createContext();

const setFiltersType = "SET_FILTERS";

function filtersReducer(state, action) {
  switch (action.type) {

    case setFiltersType: {
      return {
        ...state,
        filters: action.filters
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

export function FiltersProvider(props) {
  const [state, dispatch] = React.useReducer(filtersReducer, {
    filters: availableFilters.reduce((filters, filter) => {
      filters[filter.propName] = false;

      return filters;
    }, {})
  });

  const value = React.useMemo(() => [state, dispatch], [state]);
  return <FiltersContext.Provider value={value} {...props} />
}

export function useFilters() {
  const context = React.useContext(FiltersContext);
  if (!context) {
    throw new Error(`useFilters must be used within a FiltersProvider`);
  }

  const [state, dispatch] = context;

  return {
    state,
    dispatch,
    setFilters: filters => dispatch({ type: setFiltersType, filters })
  }
}

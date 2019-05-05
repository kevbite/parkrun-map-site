import React from 'react';
import SiteMetadata from '../components/site-metadata';
import { ParkrunsProvider } from '../parkruns/parkruns-context';
import { LocationProvider } from '../location/location-context';
import { FiltersProvider } from '../filters/filters-context';
import Navigation from '../components/navigation';

export default (({ children, location }) => {
  return (
    <LocationProvider>
      <SiteMetadata pathname={location.pathname} />
      <ParkrunsProvider>
        <FiltersProvider>
          <div>{children}</div>
          <Navigation pathname={location.pathname} />
        </FiltersProvider>
      </ParkrunsProvider>
    </LocationProvider>);
})

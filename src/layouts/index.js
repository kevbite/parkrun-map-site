import React from "react";
import SiteMetadata from "../components/site-metadata";
import { ParkrunsProvider } from "../parkruns/parkruns-context";
import { LocationProvider } from "../location/location-context";
import Navigation from '../components/navigation';

export default (({ children, location }) => {
  return (
    <LocationProvider>
      <SiteMetadata pathname={location.pathname} />
      <ParkrunsProvider>
        <div>{children}</div>
        <Navigation />
      </ParkrunsProvider>
    </LocationProvider>);
})

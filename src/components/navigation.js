import React, { useState } from "react"
import { withStyles } from "@material-ui/core/styles"
import { navigate, withPrefix } from "gatsby"
import { useParkruns } from "../parkruns/parkruns-context"
import LinearProgress from '@material-ui/core/LinearProgress';

import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import MapIcon from "@material-ui/icons/Map";
import InfoIcon from "@material-ui/icons/Info";
import PlaceIcon from "@material-ui/icons/Place";
import FilterListIcon from "@material-ui/icons/FilterList";
import FilterBadge from './filter-badge';

const styles = {
  bottomPanel: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    zIndex: 999
  }
}

export default withStyles(styles)(({ classes, pathname }) => {

  let navValue = withPrefix(pathname);

  const parkrunSelected = navValue.startsWith(withPrefix('/parkruns/'));
  if (parkrunSelected) {
    navValue = '/parkruns/*';
  }

  const navigationChanged = value => {
    const routeList = ["/", "/filters/", "/about/"];

    const route = routeList.find(x => x === value);
    if (route) {
      navigate(route);
    }
  };


  const { state: { isLoading } } = useParkruns();

  return (<div className={classes.bottomPanel}>
    {isLoading && <LinearProgress />}
    <BottomNavigation
      onChange={(_, value) => navigationChanged(value)}
      value={navValue}
    >
      <BottomNavigationAction
        label="parkruns"
        value="/"
        icon={<MapIcon />}
      />
      {parkrunSelected && <BottomNavigationAction
        label="parkrun"
        value="/parkruns/*"
        icon={<PlaceIcon />}
      />}
      <BottomNavigationAction
        label="Filters"
        value="/filters/"
        icon={<FilterBadge>
          <FilterListIcon />
        </FilterBadge>}
      />
      <BottomNavigationAction
        label="Information"
        value="/about/"
        icon={<InfoIcon />}
      />
    </BottomNavigation>
  </div>);
});

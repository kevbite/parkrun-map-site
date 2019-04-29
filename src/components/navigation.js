import React, { useState } from "react"
import { withStyles } from "@material-ui/core/styles"
import { navigate } from "gatsby"
import { useParkruns } from "../parkruns/parkruns-context"
import LinearProgress from '@material-ui/core/LinearProgress';

import BottomNavigation from "@material-ui/core/BottomNavigation"
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"
import MapIcon from "@material-ui/icons/Map";
import InfoIcon from "@material-ui/icons/Info";
import FilterListIcon from "@material-ui/icons/FilterList";

const styles = {
  bottomPanel: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    zIndex: 999
  }
}

export default withStyles(styles)(({ classes }) => {
  const [route, setRoute] = useState('/');


  const navigationChanged = value => {
    const routeList = ["/", "/filters", "/about"];

    const route = routeList.find(x => x === value);
    if (route) {
      navigate(route);
      setRoute(route);
    }
  };


  const { state: { isLoading } } = useParkruns();

  return (<div className={classes.bottomPanel}>
    {isLoading && <LinearProgress />}
    <BottomNavigation
      onChange={(_, value) => navigationChanged(value)}
      value={route}
    >
      <BottomNavigationAction
        label="parkruns"
        value="/"
        icon={<MapIcon />}
      />
      <BottomNavigationAction
        label="Filters"
        value="/filters"
        icon={<FilterListIcon />}
      />
      <BottomNavigationAction
        label="Information"
        value="/about"
        icon={<InfoIcon />}
      />
    </BottomNavigation>
  </div>);
});

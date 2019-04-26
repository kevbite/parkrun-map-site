import React from "react"
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MapIcon from '@material-ui/icons/Map';
import InfoIcon from '@material-ui/icons/Info';
import FilterListIcon from '@material-ui/icons/FilterList';
import { navigate } from 'gatsby';
import SiteMetadata from '../components/site-metadata';
import { ParkrunsProvider } from '../parkruns/parkruns-context';

const styles = {
  "navigation": {
    position: "fixed",
    bottom: 0,
    width: "100%"
  }
};

export default withStyles(styles)(({ children, classes, location }) => {

  const navigationChanged = (value) => {
    if (value === '/') {
      navigate("/")
    } else if (value === '/filters') {
      navigate("/filters")
    } else if (value === '/about') {
      navigate("/about")
    }
  };

  return (<>
    <SiteMetadata pathname={location.pathname} />
    <ParkrunsProvider>
      <div className={classes.main}>
        {children}
      </div>
      <BottomNavigation value={location.pathname} onChange={(_, value) => navigationChanged(value)} className={classes.navigation}>
        <BottomNavigationAction label="parkruns" value="/" icon={<MapIcon />} />
        <BottomNavigationAction label="Filters" value="/filters" icon={<FilterListIcon />} />
        <BottomNavigationAction label="Information" value="/about" icon={<InfoIcon />} />
      </BottomNavigation>
    </ParkrunsProvider>
  </>)
});

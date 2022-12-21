import React from 'react';
import { availableFilters } from '../components/available-filters';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import PineTreeIcon from 'mdi-react/PineTreeIcon';
import CreationIcon from 'mdi-react/CreationIcon';
import selectSpecialEventYears from '../selectors/special-event-years-selector';

const styles = theme => ({
  icon: {
    margin: 5
  }
});

export default withStyles(styles)(({ specialEvents, classes }) => {

  const specialEventYears = selectSpecialEventYears();


  const isChristmasDay = specialEvents.christmasDay.some(year => specialEventYears.christmasDayYears.includes(year));
  const isNewYearsDay = specialEvents.newYearsDay.some(year => specialEventYears.newYearsDayYears.includes(year));;

  return (<>
    {isChristmasDay && <Tooltip
      title="Christmas Day"
      disableFocusListener
      disableTouchListener>
      <span>
        <PineTreeIcon className={classes.icon} />
      </span>
    </Tooltip>
    }
    {isNewYearsDay && <Tooltip
      title="New Years Day"
      disableFocusListener
      disableTouchListener>
      <span>
        <CreationIcon className={classes.icon} />
      </span>
    </Tooltip>
    }
  </>);
});



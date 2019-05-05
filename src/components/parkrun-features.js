import React from 'react';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';

export default ({ features }) => {
  return (<div>
    {features.buggyFriendly && <ChildFriendlyIcon />}
    {features.wheelchairFriendly && <AccessibleForwardIcon />}
  </div>);
};
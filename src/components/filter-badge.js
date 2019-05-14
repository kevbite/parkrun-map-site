import React from 'react';
import Badge from '@material-ui/core/Badge';
import { useFilters } from '../filters/filters-context';
import selectCount from '../selectors/count-enabled-filters-selector';

export default ({ children }) => {
  const { state: { filters } } = useFilters();
  const count = selectCount({ filters });

  return (<Badge badgeContent={count} color="secondary">
    {children}
  </Badge>);
};
import selectParkruns from '../selectors/parkrun-selector';
import { useParkruns } from '../parkruns/parkruns-context';
import { useFilters } from '../filters/filters-context';

export function useFilteredParkruns() {
  const {
    state: { parkruns }
  } = useParkruns();

  const {
    state: { filters }
  } = useFilters();

  return {
    parkruns: selectParkruns({ parkruns, filters })
  };
}
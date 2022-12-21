import turfDistance from '@turf/distance';
import { point } from "@turf/helpers";
import selectSpecialEventYears from './special-event-years-selector';

export default function selectParkruns({ parkruns, filters, userLocation: { location = undefined } = {} }) {

  const userPoint = location ? point([location.latitude, location.longitude]) : null;

  const enrichParkrunData = (parkrun) => {

    const parkrunPoint = point([parkrun.lat || 0, parkrun.lon || 0]);

    let distance;
    if (userPoint) {
      distance = turfDistance(userPoint, parkrunPoint, { units: 'kilometers' });
      distance = Math.round(distance * 100) / 100;
    }

    return {
      ...parkrun,
      distance
    };
  }

  const selectedFeatureFilters = Object.entries(filters.features || []).filter(x => x[1]).map(x => x[0]);

  const filteredParkruns = parkruns.filter(({ features, course: { terrain } = {}, specialEvents }) => {

    const selectedWhen = selectedFeatureFilters.map(x => features[x]);

    const matchesTerrainFilters = () => {
      if (!terrain) {
        return true;
      }
      return filters.terrain.every(val => terrain.includes(val))
    };

    const matchesSpecialEvent = () => {

      const specialEventYears = selectSpecialEventYears();

      const christmasDayYears = filters?.specialEvents?.christmasDay ? specialEventYears.christmasDayYears : [];
      const newYearsDayYears = filters?.specialEvents?.newYearsDay ? specialEventYears.newYearsDayYears : [];
      
      return christmasDayYears.every(val => specialEvents.christmasDay.includes(val))
              && newYearsDayYears.every(val => specialEvents.newYearsDay.includes(val))
    };

    

    return selectedWhen.every(x => x) && matchesTerrainFilters() && matchesSpecialEvent();
  });

  return filteredParkruns.map(enrichParkrunData);
};

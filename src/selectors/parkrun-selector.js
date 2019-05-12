export default function selectParkruns({ parkruns, filters }) {

  const selectedFeatureFilters = Object.entries(filters.features || []).filter(x => x[1]).map(x => x[0]);

  const filteredParkruns = parkruns.filter(({ features, course: { terrain } = {} }) => {

    const selectedWhen = selectedFeatureFilters.map(x => features[x]);

    const matchesTerrainFilters = () => {
      if (!terrain) {
        return true;
      }
      return filters.terrain.every(val => terrain.includes(val))
    };

    return selectedWhen.every(x => x) && matchesTerrainFilters();
  });

  return filteredParkruns;
};
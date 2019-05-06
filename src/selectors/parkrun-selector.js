export default function selectParkruns({ parkruns, filters }) {

  const selectedFilters = Object.entries(filters).filter(x => x[1]).map(x => x[0]);

  const filteredParkruns = parkruns.filter(parkrun => {

    const selectedWhen = selectedFilters.map(x => parkrun.features[x]);

    return selectedWhen.every(x => x);
  });

  return filteredParkruns;
};
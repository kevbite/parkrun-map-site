
export default ({ filters: { features = {}, terrain = []} }) => {
  const selectedFeaturesCount = Object.values(features).filter(x => x).length;
  const selectedTerrainCount = terrain.length;

  return selectedFeaturesCount + selectedTerrainCount;
};
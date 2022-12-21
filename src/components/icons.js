import L from 'leaflet';


const defaultOptions = {
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png'
};

export const greenIcon = typeof window === 'undefined' ? null : L.icon({
  ...defaultOptions,
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png'
});

export const orangeIcon = typeof window === 'undefined' ? null : L.icon({
  ...defaultOptions,
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png'
});

export const redIcon = typeof window === 'undefined' ? null : L.icon({
  ...defaultOptions,
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png'
});

export const blueIcon = typeof window === 'undefined' ? null : L.icon({
  ...defaultOptions,
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png'
});

export const goldIcon = typeof window === 'undefined' ? null : L.icon({
  ...defaultOptions,
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png'
});

export const violetIcon = typeof window === 'undefined' ? null : L.icon({
  ...defaultOptions,
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png'
});
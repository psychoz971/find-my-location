<script>
import '../node_modules/leaflet/dist/leaflet.css'
import L from 'leaflet'
import {mylocation} from './store.js'
let map
let marker
export const mapCenter = [16.2290, -61.4373]
export const mapZoom = 10

function createMap(container) {
  let m = L.map(container, {preferCanvas: true, scrollWheelZoom: false }).setView(mapCenter, mapZoom);
  L.tileLayer(
    'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
    {
      attribution: `&copy;<a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a>,
        &copy;<a href="https://carto.com/attributions" target="_blank">CARTO</a>`,
      subdomains: 'abcd',
      maxZoom: 14,
    }
  ).addTo(m);

  return m;
}

function addMarker(location) {
  if (location) {
    let position = [location.geometry.coordinates[1], location.geometry.coordinates[0]]
    if(marker) {
      marker.setLatLng(position)
    } else {
      marker = L.marker(position).addTo(map)
    }
    map.flyTo(position, 14)
    marker.bindPopup(location.properties.label).openPopup();
  }
}

function mapAction(container) {
  map = createMap(container)
}

$: addMarker($mylocation)
</script>

<div class="map" use:mapAction></div>

<style>
.map {
  width: 100%;
  height: 100%;
  min-height: 30rem;
}
</style>

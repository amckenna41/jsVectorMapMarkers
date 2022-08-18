# jsvectormapmarkers

* `jsvectormapmarkers.js` - js script of country/territories/jurisdictions and their corresponding coordinates.
* `jsvectormapcitymarkers.js` - js script of major world city and their corresponding coordinates. 

Usage
-----

```js
import jsVectorMap from 'jsvectormap'
import 'jsvectormap/dist/maps/world.js' //import World Map 
import jsvectormapmarkers from 'jsvectormapmarkers'

//create new jsVectorMap interactive map
const map = new jsVectorMap({
  selector: '#map',
  map: 'world',
})

//the country name, its 2 letter ISO alpha-2 OR ISO alpha-3 code are compatible with function
const countryName = "Bermuda";
const countryISOAlpha2 = "BM";
const countryISOAlpha3 = "BMU";

var markerLatLang = getMarkerLatLng(countryName);
// var markerLatLang = getMarkerLatLng(countryISOAlpha2);
// var markerLatLang = getMarkerLatLng(countryISOAlpha3);

//marker object contains lat/long on map, the name of the marker and the status 
var marker = {latLng: markerLatLang, name: "Bermuda", status: 'mrk'}

//call function to add marker to map
map.addMarkers(marker);

```
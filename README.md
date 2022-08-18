<h3 align="center">JSVectorMap Markers</h3>

jsvectormapmarkers is a npm package that contains a comprehensive list of country/jurisdictions/territories and city coordinates (latitude and longitude) for markers in the jsVectorMap interactive map package. The project serves as a utility packgage for jsVectorMap[[1]](#references) which highlights many countries within their interactive maps. 

Many countries/jurisdictions/territories are too small or unavailable in the maps, therefore this package was created to easily integrate those small parts of the world that are unavailable or too small to see in the jsVectorMap maps using Markers e.g. Marshall Islands, Aruba, Seychelles etc. Markers are little vectors that can be added to a map to highlight a specific part of the world. Coming soon is a similar methodology but for major cities of the world...


<a href="https://www.npmjs.com/package/jsvectormapmarkers"><img src="https://img.shields.io/npm/l/jsvectormapmarkers.svg?sanitize=true" alt="License"></a>
<!-- <a href="https://npmcharts.com/compare/jsvectormapmarkers?minimal=true"><img src="https://img.shields.io/npm/dm/jsvectormapmarkers.svg?sanitize=true" alt="Downloads"></a> -->
<!-- <img src="https://data.jsdelivr.com/v1/package/npm/jsvectormapmarkers/badge?style=rounded"> -->
<img src="https://img.shields.io/npm/v/jsvectormapmarkers.svg?sanitize=true" alt="Version">
<!-- <img src="https://img.shields.io/bundlephobia/min/jsvectormapmarkers" alt="Minified">
<img src="https://img.shields.io/bundlephobia/minzip/jsvectormapmarkers" alt="Minizipped"> -->

[![Issues](https://img.shields.io/github/issues/amckenna41/jsVectorMapMarkers)](https://github.com/amckenna41/jsVectorMapMarkers/issues)

[![Size](https://img.shields.io/github/repo-size/amckenna41/jsVectorMapMarkers)](https://github.com/amckenna41/jsVectorMapMarkers)
[![Commits](https://img.shields.io/github/commit-activity/w/amckenna41/jsVectorMapMarkers)](https://github.com/amckenna41/jsVectorMapMarkers)

Table of Contents
-----------------

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contact](#contact)
  * [License](#license)
  * [References](#references)


Installation
------------

The jsVectorMap library is a pre-requisite to using this pacakge, it can be installed via npm:
```bash
npm i jsvectormap
```

jsvectormapmarkers can then also be installed via npm:
```bash
npm i jsvectormapmarkers
```

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
<p align="center">
  <a href="">
    <img src="https://raw.githubusercontent.com/amckenna41/jsVectorMapMarkers/raw/main/images/bermuda.png" alt="bermuda" height="500" width="500" />
  </a>
</p>


Issues
------
Please feel free to raise an Issue in the [Issues](https://github.com/amckenna41/jsVectorMapMarkers/issues) tab for any such cases and I will try to rectify it.

Any other issues, errors or bugs can be raised via the [Issues](https://github.com/amckenna41/jsVectorMapMarkers/issues) tab in the repository.

Contact
-------

If you have any questions or feedback, please contact amckenna41@qub.ac.uk or visit my [LinkedIn](https://www.linkedin.com/in/adam-mckenna-7a5b22151/):

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/adam-mckenna-7a5b22151/)

License
-----------
Distributed under the MIT License. See `LICENSE` for more details.  


References 
----------

\[1\]: https://github.com/themustafaomar/jsvectormap <br>

[Back to top](#TOP)


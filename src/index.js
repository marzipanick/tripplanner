console.log('Hey buddy!');

const mapboxgl = require('mapbox-gl');
// const { markerMaker } = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1IjoiY2llbHRhbiIsImEiOiJjanQ0aWZpZ2gxNHN0M3pwcXdwa3RrbGVjIn0.K7xtf_HIobScvVFpm8zmAA';

const map = new mapboxgl.Map({
	container: 'map',
	center: [ -74.009, 40.705 ], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
	zoom: 12, // starting zoom
	style: 'mapbox://styles/mapbox/streets-v10' // mapbox has lots of different map styles available.
});

// const marker = markerMaker("activity", [-74.009151, 40.705086]); // or [-87.6354, 41.8885]
// marker.addTo(map);

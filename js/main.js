/* This file was created by Sara Pancheri, March 18 2022 */

//create a basemap style. You can find other options at https://leaflet-extras.github.io/leaflet-providers/preview/

var CartoDB_Positron = L.tileLayer(
		'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', 
		{
			attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
			subdomains: 'abcd'
		}
	)
	//add this basemap style to a JS object, to which you could also add other baselayers. This object is loaded as a basemap selector as seen further down
	var baseLayers = {
		"OpenStreetMap": CartoDB_Positron
		//,...
	};
	// create the map

	var mymap = L.map('mapdiv', {
		center: [11.033535, -8.941073]
		,zoom: 1.5
		,maxZoom: 22
		,minZoom: 0
		,layers: CartoDB_Positron
	});
		
	// parse json object (var geojsonData) and turn into loadable layer
	geojsonLayer = L.geoJSON(geojsonData);
	
	//add geojsonData to map
	geojsonLayer.addTo(mymap);// add json element to map
	
	//declare basemap selector widget
	var lcontrol = L.control.layers(baseLayers);
	//add it to the map
	lcontrol.addTo(mymap);







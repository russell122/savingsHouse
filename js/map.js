
// Ленинский проспект, 15 «А», БЦ «Central Park Tower», 21 этаж
var mapCenter1 = [55.72072, 37.600582];

var mapCenter2 = [56.891274, 60.642835];

function createMap() {

	var mapstyle = [
		{
			"featureType": "water",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#e9e9e9"
				},
				{
					"lightness": 17
				}
			]
		},
		{
			"featureType": "landscape",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#f5f5f5"
				},
				{
					"lightness": 20
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"lightness": 17
				}
			]
		},
		{
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"lightness": 29
				},
				{
					"weight": 0.2
				}
			]
		},
		{
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"lightness": 18
				}
			]
		},
		{
			"featureType": "road.local",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#ffffff"
				},
				{
					"lightness": 16
				}
			]
		},
		{
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#f5f5f5"
				},
				{
					"lightness": 21
				}
			]
		},
		{
			"featureType": "poi.park",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#dedede"
				},
				{
					"lightness": 21
				}
			]
		},
		{
			"elementType": "labels.text.stroke",
			"stylers": [
				{
					"visibility": "on"
				},
				{
					"color": "#ffffff"
				},
				{
					"lightness": 16
				}
			]
		},
		{
			"elementType": "labels.text.fill",
			"stylers": [
				{
					"saturation": 36
				},
				{
					"color": "#333333"
				},
				{
					"lightness": 40
				}
			]
		},
		{
			"elementType": "labels.icon",
			"stylers": [
				{
					"visibility": "off"
				}
			]
		},
		{
			"featureType": "transit",
			"elementType": "geometry",
			"stylers": [
				{
					"color": "#f2f2f2"
				},
				{
					"lightness": 19
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.fill",
			"stylers": [
				{
					"color": "#fefefe"
				},
				{
					"lightness": 20
				}
			]
		},
		{
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [
				{
					"color": "#fefefe"
				},
				{
					"lightness": 17
				},
				{
					"weight": 1.2
				}
			]
		}
	];

	var mapIcon = {
		url: 'img/marker.png',
		scaledSize: new google.maps.Size(
			131,
			74),
		size: new google.maps.Size(
			131,
			74),
		anchor: new google.maps.Point(
			65,
			74)
	};

	var opts = {
		zoom: 14,
		styles: mapstyle,
		maxZoom: 20,
		minZoom: 0,
		mapTypeId: 'roadmap',
	};

	
	opts.clickableIcons = true;
	opts.disableDoubleClickZoom = false;
	opts.draggable = true;
	opts.keyboardShortcuts = true;
	opts.scrollwheel = false;
	

	
	var setControlOptions = function(key, enabled, position, style, mapTypeIds){
		opts[key + 'Control'] = enabled;
		opts[key + 'ControlOptions'] = {
			position: google.maps.ControlPosition[position],
			style: google.maps.MapTypeControlStyle[style],
			mapTypeIds: mapTypeIds
		};
	};
	
		
	setControlOptions('fullscreen',false,'DEFAULT','',null);
	setControlOptions('mapType',false,'DEFAULT','DEFAULT',["roadmap","satellite","terrain"]);
	setControlOptions('rotate',false,'DEFAULT','',null);
	setControlOptions('scale',true,'','',null);
	setControlOptions('streetView',false,'DEFAULT','',null);
	setControlOptions('zoom',true,'DEFAULT','',null);
	

	var map1 = new google.maps.Map(document.getElementById('map1'), opts);
	map1.setCenter(new google.maps.LatLng(mapCenter1[0],mapCenter1[1]));
	
	var map2 = new google.maps.Map(document.getElementById('map2'), opts);
	map2.setCenter(new google.maps.LatLng(mapCenter2[0],mapCenter2[1]));

	
	(function(){
		var markerOptions1 = {
			map: map1,
			position: {
				lat: mapCenter1[0],
				lng: mapCenter1[1],
			}
		};
		var markerOptions2 = {
			map: map2,
			position: {
				lat: mapCenter2[0],
				lng: mapCenter2[1],
			}
		};
		
		markerOptions1.icon = mapIcon;
		markerOptions2.icon = mapIcon;
		markerOptions1.options = {
			optimized: true,
		};
		markerOptions2.options = {
			optimized: true,
		};
		
		var marker1 = new google.maps.Marker(markerOptions1);
		var marker2 = new google.maps.Marker(markerOptions2);


	})();
	

}


createMap();


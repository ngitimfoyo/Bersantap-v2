// initial scripts
$(document).ready(function(){	
	APP.Init();
});

var APP = {	
	//map
	Map: {},
	
	// info window
	Infowindow: {},
	
	// property map
	MapOptions: {zoom: 15, streetViewControl: false, zoomControl: false, draggableCursor: 'pointer'},
	
	// markers
	Markers: [],
	UserMarker: [],
	
	// strings
	Constant: { 
		locationStr: "Lokasi mu!",
		countryRestrict: {"componentRestrictions" : {'country': 'ID'}},
		marker_blue: "../images/pin_blue.png",
		marker_green: "../images/pin_green.png",
		marker_orange: "../images/pin_orange.png",
		marker_purple: "../images/pin_purple.png",
		marker_red: "../images/pin_red.png",
		marker_user: "../images/pin_user.png",
		marker_manage_blue : "../../images/pin_blue.png",
		search_distance: 3, // in KM
		places_amount: 5
	},
	
	// user location
	User: {lat: '', lon: ''},		
};

APP.Init = function() {
	var self = this;
	
	// attach google listener on Load
	self.LoadMap();
};

// load map
APP.LoadMap = function() {
	var self = this;
	
	// initialize map	
	self.Map = new google.maps.Map(document.getElementById('peta-area'), self.MapOptions);	

	// get User location
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);			
		  
			self.Infowindow = new google.maps.InfoWindow({
				map: self.Map,
				position: pos,
				content: self.Constant['locationStr']				
			});
			
			self.Map.setCenter(pos);
			self.Map.setZoom(self.MapOptions.zoom);
			self.User.lat = position.coords.latitude;
			self.User.lon = position.coords.longitude;
		}, function() {
		  handleNoGeolocation(true);
		});
	} else {
		// Browser doesn't support Geolocation
		handleNoGeolocation(false);
	}
	
	// handle for Error
	handleNoGeolocation = function(errorFlag) {
	  if (errorFlag) {
		var content = 'Error: The Geolocation service failed.';
	  } else {
		var content = 'Error: Your browser doesn\'t support geolocation.';
	  }

	  var options = {
		map: self.Map,
		position: new google.maps.LatLng(60, 105),
		content: content
	  };

	  self.Infowindow = new google.maps.InfoWindow(options);
	  self.Map.setCenter(options.position);
	};

	// initialize autocomplete textbox
	//self.AutoComplete();	
};
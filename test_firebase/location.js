var moments_near_me;
function measure(lat1, lon1, lat2, lon2){  // generally used geo measurement function
    var R = 6378.137; // Radius of earth in KM
    var dLat = (lat2 - lat1) * Math.PI / 180;
    var dLon = (lon2 - lon1) * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return d; // kilometers
}

function moments_in_radius (user_lat, user_lon) {
	// body...
	var myRef = new Firebase("https://torid-inferno-6582.firebaseio.com/moments");
	myRef.on("child_added", function (value) {
		// body...
			var coords = value.val().geolocation.geometry.coordinates;
			var distance = measure(user_lat, user_lon, coords[0], coords[1]);
			if (distance < 2){
				populate_moments(value.val());
			}
		
	});
}

function populate_moments (moment) {
	// body...
	console.log(moment);
	console.log(moment.name);
}
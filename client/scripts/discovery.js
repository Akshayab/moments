var discoveryApp = angular.module("discoveryApp", ["firebase"]);
var count = 0;
var moments = [];
var moments_near_me;


discoveryApp.controller("discoveryController", ["$scope", "$timeout",

	function($scope, $timeout) {


		//var ref = new Firebase("https://URLHERE.com/");

		//var sync = $firebase(ref);

		//$scope.data = sync.$asObject();
		$scope.availableMoments = [];
		$scope.name;

		$scope.populateMoments = function(moment) {


			count ++;

			// if(count == 10) {
			// 	$scope.availableMoments = moments;
			// }

		};

		$scope.measure = function(lat1, lon1, lat2, lon2){  // generally used geo measurement function
		    var R = 6378.137; // Radius of earth in KM
		    var dLat = (lat2 - lat1) * Math.PI / 180;
		    var dLon = (lon2 - lon1) * Math.PI / 180;
		    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
		    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
		    Math.sin(dLon/2) * Math.sin(dLon/2);
		    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
		    var d = R * c;
		    return d; // kilometers
		};	

		$scope.moments_in_radius = function (user_lat, user_lon) {
			// body...
			var myRef = new Firebase("https://torid-inferno-6582.firebaseio.com/moments");
			var testthis = myRef.on("child_added", function (value) {
				// body...
					// var coords = value.val().geolocation.geometry.coordinates;
					// var distance = measure(user_lat, user_lon, coords[0], coords[1]);
					// if (distance < 2){
						// $scope.populateMoments(value.val());
						var moment = value.val();
						var name = value.name();
						var url = 'moment.html?' + name;
						$timeout(function() {
							$scope.availableMoments.push({
								defaultImage: moment.url,
								eventEnd: moment.time_end,
								eventName: moment.name,
								eventHost: moment.user_id,
								momentId: name,
								src: url
							});
					    });

					// }
				
			});
		};

		$scope.currentTime = Date.now();
		$scope.moments_in_radius(125.6, 10.1);

		// $scope.availableMoments = [
		// 	{
		// 		defaultImage: 'testmomentpic1.jpg',
		// 		eventEnd: 1411206089113,
		// 		eventName: 'Hot Air Balloon Rides',
		// 		eventHost: 'Eliot Chan'
		// 	},
		// 	{
		// 		defaultImage: 'testmomentpic2.jpg',
		// 		eventEnd: 14112060824032,
		// 		eventName: 'Mike\'s Wedding',
		// 		eventHost: 'Amish Patel'
		// 	}
		// ];

		$scope.calculateTimeDifference = function(current, end) {
			var diff = end-current;
			diff = diff/1000/60; //convert to minutes
			minutes = Math.round(diff % 60);
			hours = Math.floor(diff/60);
			if (hours == 1) {
				return "Ends in "+hours+" hour "+minutes+" minutes from now";
			}
			else if (hours > 1) {
				return "Ends in "+hours+" hours "+minutes+" minutes from now";
			}
			else {
				return "Ends in "+minutes+" minutes";
			}
		};

		//Login function
		$scope.registerUser = function() {
			alert($scope.name+" "+$scope.email+" "+$scope.password1);
		};

		




}






]);
var discoveryApp = angular.module("discoveryApp", ["firebase"]);

discoveryApp.controller("discoveryController", ["$scope", "$firebase",

	function($scope, $firebase) {

		//var ref = new Firebase("https://URLHERE.com/");

		//var sync = $firebase(ref);

		//$scope.data = sync.$asObject();

		$scope.currentTime = Date.now();

		$scope.availableMoments = [
			{
				defaultImage: 'testmomentpic1.jpg',
				eventEnd: 1411206089113,
				eventName: 'Hot Air Balloon Rides',
				eventHost: 'Eliot Chan'
			},
			{
				defaultImage: 'testmomentpic2.jpg',
				eventEnd: 14112060824032,
				eventName: 'Mike\'s Wedding',
				eventHost: 'Amish Patel'
			}
		];

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
		}

		//Login function
		$scope.registerUser = function() {
			alert($scope.name+" "+$scope.email+" "+$scope.password1);
		};


	}

]);
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
				eventName: 'Hack the North',
				eventHost: 'Eliot Chan'
			}
		];

		$scope.calculateTimeDifference = function(current, end) {
			var diff = end-current;
			diff = diff/1000/60; //convert to minutes
			minutes = Math.round(diff % 60);
			hours = Math.floor(diff/60);
			if (hours == 1) {
				return "Ends "+hours+" hour "+minutes+" minutes from now";
			}
			else if (hours > 1) {
				return "Ends "+hours+" hours "+minutes+" minutes from now";
			}
			else {
				return "Ends "+minutes+" minutes";
			}
		}

		//Login function
		$scope.registerUser = function() {
			alert($scope.name+" "+$scope.email+" "+$scope.password1);
		};


	}

]);
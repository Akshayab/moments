var homeApp = angular.module("homeApp", ["firebase"]);

homeApp.controller("homeController", ["$scope", "$firebase",

	function($scope, $firebase) {

		//var ref = new Firebase("https://URLHERE.com/");

		//var sync = $firebase(ref);

		//$scope.data = sync.$asObject();

		//Login function
		$scope.simpleLogin = function() {
			alert($scope.email+" "+$scope.password);
		};


	}

]);
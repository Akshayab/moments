var signUpApp = angular.module("signUpApp", ["firebase"]);

signUpApp.controller("signUpController", ["$scope", "$firebase",

	function($scope, $firebase) {

		//var ref = new Firebase("https://URLHERE.com/");

		//var sync = $firebase(ref);

		//$scope.data = sync.$asObject();

		$scope.emailRegex = /^.+@.+\..+$/;

		//Login function
		$scope.registerUser = function() {
			alert($scope.email+" "+$scope.password);
		};


	}

]);
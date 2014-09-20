var signUpApp = angular.module("signUpApp", ["firebase"]);

signUpApp.controller("signUpController", ["$scope", "$firebase",

	function($scope, $firebase) {

		//var ref = new Firebase("https://URLHERE.com/");

		//var sync = $firebase(ref);

		//$scope.data = sync.$asObject();

		$scope.emailRegex = /^.+@.+\..+$/;
		$scope.registrationFailed = false;
		//Login function
		$scope.registerUser = function() {
			
			$scope.signUp($scope.name, $scope.email, $scope.password1);
		};

		$scope.signUp = function (name, email, password) {
		    // body...
		  	var myRef = new Firebase("https://torid-inferno-6582.firebaseio.com/");
		  	var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {
		    	if (error) {
		      		// an error occurred while attempting login
		      		console.log(error);
		    	} else if (user) {
		      		// user authenticated with Firebase
		      		console.log("User ID: " + user.uid + ", Provider: " + user.provider);
		    	} else {
		      		// user is logged out
		    	}
		  	});
		  authClient.createUser(email, password, function(error, user) {
		    if (error === null) {
		      var users = myRef.child("users/" + user.id);
		      var user_json = {
		        "id": user.id,
		        "name": "akshay",
		        "email": user.email,
		        "event_karma": 0,
		        "participation_karma": 1
		      }; 
		      users.set(user_json)
		    console.log("User created successfully:", user);
		  } else {
		  	$scope.registrationFailed = true;
		  }
		  });
		}


	}

]);
var userInfo;
var is_logged_in = false;

var homeApp = angular.module("homeApp", ["firebase"]);

homeApp.controller("homeController", ["$scope", "$firebase",

	function($scope, $firebase) {

		$scope.loginFailed = false;

		$scope.simpleLogin = function (){
		  var myRef = new Firebase("https://torid-inferno-6582.firebaseio.com/");
		  var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {
		    if (error) {
		      $scope.loginFailed = true;
		    } else if (user) {
		      if(!is_logged_in)
		      {
		        set_user_info(user);
		        is_logged_in = true;  
		      }
		      $scope.loginFailed = false;
		      window.location.href = "discovery.html";
		    } else {
		      $scope.loginFailed = true;
		    }
		  });

		  authClient.login('password', {
		  email: $scope.email,
		  password: $scope.password
		  });
		}
	}

]);

function login_user (email, password){
  var myRef = new Firebase("https://torid-inferno-6582.firebaseio.com/");
  var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {
    if (error) {
      alert("Login failed due to incorrect email or password.");
    } else if (user) {
      if(!is_logged_in)
      {
        // user authenticated with Firebase
        set_user_info(user);
        is_logged_in = true;  
      }
      // console.log("User ID: " + user.id + ", Provider: " + user.provider);
    } else {
      // user is logged out
    }
  });

  authClient.login('password', {
  email: email,
  password: password
  });
}

function set_user_info (user) {
  // body...
  userInfo = user;
  console.log(userInfo);
}

function get_user_info () {
  // body...
  return userInfo;
}
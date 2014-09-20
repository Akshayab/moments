var createApp = angular.module("createApp", ["firebase"]);

createApp.controller("createController", ["$scope", "$firebase",

	function($scope, $firebase) {
		
		$scope.createMoment = function() {
			momentJson = {
				"name" : $scope.name,
				"description" : $scope.description,
				"time_start": Date.now(),
				"time_end": Date.now() + ($scope.duration*60*60*1000),
				"location" : { 
						"name": "Hartsfield Jackson Atlanta", 
						"lat": 33.64, 
						"lon": -84.444
				}
			};
		};

	}

]);

function uploadPicture() {
  filepicker.setKey("AucuSEbFQdWQGPMB4huCgz");
  filepicker.pickAndStore({mimetype:"image/*",
               services:['COMPUTER','FACEBOOK','WEBCAM'],
              },{},

  function(InkBlobs){
      console.log(JSON.stringify(InkBlobs));
  });
}

var myRef = new Firebase("https://torid-inferno-6582.firebaseio.com/");
function create_moment (moment_data) {
	// body...
	var moment = myRef.child("moments");
	var intial_user_info = get_user_info();
	var momentIdLink = moment.push(moment_data);
	var usersRef = myRef.child('users/' + intial_user_info.id);
	var index = momentIdLink.toString().lastIndexOf('/');
	var momentId = momentIdLink.toString().substring(index+1);
	usersRef.once("value", function(user_info){
		var current_user_info = user_info.val();
		var momentList;
		if (current_user_info.moments) {
			momentList = current_user_info.moments;
			momentList.push(momentId);
		}
		else {
			momentList = [momentId];
		}	
		usersRef.update({"moments": momentList});
	});
	join_moment(momentId);
}
var momentApp = angular.module("momentApp", ["firebase"]);
var count = 0;
var moments = [];
var moments_near_me;
var user_name;
var myDataRef = new Firebase('https://torid-inferno-6582.firebaseio.com/comments');




momentApp.controller("momentController", ["$scope", "$timeout",

	function($scope, $timeout) {


		//var ref = new Firebase("https://URLHERE.com/");

		//var sync = $firebase(ref);

		//$scope.data = sync.$asObject();
		$scope.availableComments = [];
		$scope.name;
		$scope.images = ["https://www.filepicker.io/api/file/My9fiQspSfSk6enX3Dl6", "https://www.dorneypark.com/images/rides/Meteor1.jpg","https://www.filepicker.io/api/file/1Bekl5NWSyuQaIi4uxI4","https://www.filepicker.io/api/file/GJIwGWqSMCvkguatGxuw"];
      


		var index = document.location.href.lastIndexOf('?');
		var query = document.location.href.substring(index+1);
		var objects = query.split('&');
		var moment_id = objects[0].split("=")[1];
		var user_id = objects[1].split("=")[1];
		var user_ref = new Firebase("https://torid-inferno-6582.firebaseio.com/users/" + user_id);
		user_ref.once("value", function(value){
			user_name = value.val();
		})

		$scope.goToCreate = function () {
			window.location.href='create.html?' + user_id;
		}
		$scope.getMomentInfo = function () {
			// body...
			var myRef = new Firebase("https://torid-inferno-6582.firebaseio.com/moments/" + moment_id);
			var testthis = myRef.once("value", function (value) {
				// body...
					// var coords = value.val().geolocation.geometry.coordinates;
					// var distance = measure(user_lat, user_lon, coords[0], coords[1]);
					// if (distance < 2){
						// $scope.populateMoments(value.val());
						var moment = value.val();
						var name = value.name();
						$timeout(function() {
							// $scope.availableMoments.push({
							// 	defaultImage: moment.url,
							// 	eventEnd: moment.time_end,
							// 	eventName: moment.name,
							// 	eventHost: moment.user_id,
							// 	momentId: name
							// });
							$scope.name = moment.name;
					    });

					// }
				
			});
		};

		//Login function
		$scope.fillComments = function() {
			alert($scope.name+" "+$scope.email+" "+$scope.password1);
		};


		$scope.getComments = function() {

			var commentsRef = myDataRef.child(moment_id);
			
		    	commentsRef.on('child_added', function(snapshot) {
			        var message = snapshot.val();
			        $timeout(function() {
						$scope.availableComments.push({
					 			comment: message.comment,
					 			name: message.name
							}
						);

		        	});
	        	
	    	});

		}

		$scope.enterComment = function(moment_id, name, comment) {
			var commentsRef = myDataRef.child(moment_id);
			commentsRef.push({
				// id: get_user_info().id,
				id: 4,
				name: name,
				comment: comment
			});
		}

		$('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          text = $('#messageInput').val();
          $scope.enterComment(moment_id, user_name.name, text);
          $('#messageInput').val('');
        }
      });

		$scope.getComments();

}

]);
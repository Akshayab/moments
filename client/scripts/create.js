var createApp = angular.module("createApp", ["firebase"]);

createApp.controller("createController", ["$scope", "$firebase",

	function($scope, $firebase) {


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
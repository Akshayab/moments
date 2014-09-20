var userInfo;
var is_logged_in = false;
$(document).ready(function(){
  login_user("abudhkarsdf23@uwaterloo.ca", "newpassword123!");
})

function login_user (email, password){
  var myRef = new Firebase("https://torid-inferno-6582.firebaseio.com/");
  var authClient = new FirebaseSimpleLogin(myRef, function(error, user) {
    if (error) {
      // an error occurred while attempting login
      console.log(error);
    } else if (user) {
      if(!is_logged_in)
      {
        // user authenticated with Firebase
        set_user_info(user);
        is_logged_in = true;  
        var moment = {
          "name": "hackathon",
          "description": "yaay",
          "location": "sdfsd",
          "time_start": 123,
          "time_end": 123,
          "user_id": get_user_info().id,
          "geolocation": {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [125.6, 10.1]
            },
            "properties": {
              "name": "Dinagat Islands"
            }
          },
          "url": "https://www.filepicker.io/api/file/GJIwGWqSMCvkguatGxuw"
        };
        create_moment(moment);
        moments_in_radius(125.6, 10.1);
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
var is_logged_in = false;
$(document).ready(function(){
  login_user("abudhkar@uwaterloo.ca", "newpassword123!");
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
        get_user_info(user);
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

function get_user_info (user) {
  // body...
  console.log(user);
}
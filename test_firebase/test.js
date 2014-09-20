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
      authClient.createUser('abudhkar2@uwaterloo.ca', 'newpassword123!', function(error, user) {
  if (error === null) {
    console.log("User created successfully:", user);
  } else {
    console.log("Error creating user:", error);
  }
});
      authClient.login('password', {
  email: 'abudhkar@uwaterloo.ca',
  password: 'newpassword123!'
});
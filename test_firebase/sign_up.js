/*
  This is how you use the sign up function!!
  Include sing_up.js in html before the js file
  call sign_up from your file
  pass name email password as parameters

   Example:
   $(document).ready(function(){
     sign_up("asdas", "akshay@yaay.com", "Asdasd");
   })
*/
function sign_up (name, email, password) {
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
        "name": name,
        "email": user.email
      }; 
      users.set(user_json)
    console.log("User created successfully:", user);
  } else {
  console.log("Error creating user:", error);
  }
  });
}
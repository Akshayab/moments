var fb = new Firebase("https://torid-inferno-6582.firebaseio.com/moments");
var fb_user = new Firebase("https://torid-inferno-6582.firebaseio.com/moments/users");

fb.once('value', function(data){
console.log(data.val());
});	

var user2 = {
		"name": "Akshay",
		"email_id": "abudhkar@uwaterloo.ca",
		"moments": []
};

var user2path = new Firebase("https://torid-inferno-6582.firebaseio.com/moments/users/" + user2.name);
user2path.set(user2);
var user_path = fb_user.child("1").toString();
var user_1 = new Firebase(user_path);
user_1.once('value', function(data){
console.log(data.val());
});

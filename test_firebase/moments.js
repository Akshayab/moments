$(document).on("ready", function () {
	// body...
	// var moment = {
	//   "name": "sdf",
	//   "description": "sdfsd",
	//   "location": "sdfsd",
	//   "time_start": 123,
	//   "time_end": 123,
	//   "user_id": 123
	// };
	// create_moment(moment);
})

function create_moment (moment_data) {
	// body...
	var myRef = new Firebase("https://torid-inferno-6582.firebaseio.com/");
	var moment = myRef.child("moments");
	var intial_user_info = get_user_info();
	var momentIdLink = moment.push(moment_data);
	var usersRef = myRef.child('users/' + intial_user_info.id);
	var index = momentIdLink.toString().lastIndexOf('/');
	var momentId = momentIdLink.toString().substring(index+1);
	console.log(usersRef.toString());
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
}
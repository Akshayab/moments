//$(document).on("ready", function () {
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
//})

var index = document.location.href.lastIndexOf('?');
var user_id = document.location.href.substring(index+1);

var myRef = new Firebase("https://torid-inferno-6582.firebaseio.com/");
var usersRef = new Firebase("https://torid-inferno-6582.firebaseio.com/users");
function create_moment (moment_data) {
	// body...
	var moment = myRef.child("moments");
	var intial_user_info;


	var userRef = usersRef.child(user_id);
	userRef.once("value", function(user_info) {
		var momentIdLink = moment.push(moment_data);
		var index = momentIdLink.toString().lastIndexOf('/');
		var momentId = momentIdLink.toString().substring(index+1);
			var current_user_info = user_info.val();
			var momentList;
			var event_karma = current_user_info.event_karma;
			if (current_user_info.moments) {
				momentList = current_user_info.moments;
				momentList.push(momentId);
			}
			else {
				momentList = [momentId];
			}	
			usersRef.update({"moments": momentList});
			usersRef.update({"event_karma": event_karma + 5});
	});


	
	// join_moment(momentId);
}

function join_moment (moment_id) {
	// body...
	var momentRef = myRef.child('moments/' + moment_id);
	var usersRef = myRef.child('users/' + get_user_info().id);
	usersRef.once("value", function(user_info){
		var userList;
		var current_user_info = user_info.val();
		var current_part_karma = current_user_info.participation_karma;

		usersRef.update({"participation_karma": current_part_karma + 1});
	});

	momentRef.once("value", function(moment_info){
		var current_moment_info = moment_info.val();
		
		if (current_moment_info.followers) {
			userList = current_moment_info.followers;
			userList.push(get_user_info().id);
		}
		else {
			userList = [get_user_info().id];
		}	
		momentRef.update({"followers": userList});

	});

}
var myDataRef = new Firebase('https://flickering-heat-4851.firebaseio.com/comments');

function getComments(moment_id) {

	var commentsRef = myDataRef.child(moment_id);
	commentsRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
        displayChatMessage(get_user_info().name, message.text);
    });

}

function enterComment(moment_id, name, comment) {
	var commentsRef = myDataRef.child(moment_id);
	commentsRef.push({
		id: get_user_info().id,
		name: name,
		comment: comment
	});
}
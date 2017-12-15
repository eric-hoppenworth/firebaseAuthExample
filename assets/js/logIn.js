$("#btnSignUp").on("click",function(event){
//prevent any default action
	//in this example, the button has no default action, but best to be safe!
	event.preventDefault();
	var userName = $("#userNameInput").val();
	var password = $("#passwordInput").val();
	//this code came right from the documentation
	//I added the .then() method so that I could create a spot in teh database for the new user
	firebase.auth().createUserWithEmailAndPassword(userName, password)
		.then(function(user){
			usersEndPoint.child(user.uid).set({"userName":user.email});
			window.location = "/profile.html";
		})
		.catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// ...
		});
	$("#userNameInput").val("")
	$("#userNameInput").val("")
});

$("#btnSignIn").on("click",function(event){
	//prevent any default action
	//in this example, the button has no default action, but best to be safe!
	event.preventDefault();
	var userName = $("#userNameInput").val();
	var password = $("#passwordInput").val();
	firebase.auth().signInWithEmailAndPassword(userName, password)
		.then(function(user){
			window.location = "/profile.html";
		})
		.catch(function(error) {
			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// ...
		});
	$("#userNameInput").val("")
	$("#userNameInput").val("")
});

$("#btnSignOut").on("click",function(event){
	//prevent any default action
	//in this example, the button has no default action, but best to be safe!
	event.preventDefault();
	firebase.auth().signOut();
	$("#userNameInput").val("")
	$("#userNameInput").val("")
});

$("#btnContinue").on("click",function(event){
	if(firebaseUser){
		window.location("/profile.html");
	}
})
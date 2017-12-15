// Initialize Firebase
var config = {
	apiKey: "AIzaSyBBBlmMQd_X2gGZsb_OtMJNvIaYGRDCVBM",
	authDomain: "authexample-e326d.firebaseapp.com",
	databaseURL: "https://authexample-e326d.firebaseio.com",
	projectId: "authexample-e326d",
	storageBucket: "authexample-e326d.appspot.com",
	messagingSenderId: "945928826461"
};
firebase.initializeApp(config);
	//database needs parens
var usersEndPoint = firebase.database().ref("/Users");
var firebaseUser;

firebase.auth().onAuthStateChanged(function(user) {
	if (user) {
		// User is signed in.
		usersEndPoint.once("value",function(snapshot){
			firebaseUser = snapshot.val()[user.uid];
		});
		$("#btnContinue").show();
		$("#btnSignOut").show();
	} else {
		// No user is signed in.
		$("#btnSignIn").show();
		$("#btnSignUp").show();
	}
});

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
	})
  } else {
	// No user is signed in.
  }
});

$("#btnSignUp").on("click",function(event){
  //prevent any default action
  //in this example, the button has no default action, but best to be safe!
  event.preventDefault();
  var userName = $("#userNameInput").val();
  var password = $("#passwordInput").val();
  firebase.auth().createUserWithEmailAndPassword(userName, password)
	.then(function(user){
	  usersEndPoint.child(user.uid).set({"userName":user.email})
	})
	.catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	// ...
  });
})

$("#btnSignIn").on("click",function(event){
  //prevent any default action
  //in this example, the button has no default action, but best to be safe!
  event.preventDefault();
  var userName = $("#userNameInput").val();
  var password = $("#passwordInput").val();
  firebase.auth().signInWithEmailAndPassword(userName, password).catch(function(error) {
	// Handle Errors here.
	var errorCode = error.code;
	var errorMessage = error.message;
	// ...
  });
})

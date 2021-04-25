
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCQgNqGGMUkAlfvbKou_9oUaIAGvEK977w",
      authDomain: "kwitter-ce9b7.firebaseapp.com",
      databaseURL: "https://kwitter-ce9b7-default-rtdb.firebaseio.com",
      projectId: "kwitter-ce9b7",
      storageBucket: "kwitter-ce9b7.appspot.com",
      messagingSenderId: "26032158702",
      appId: "1:26032158702:web:c88e476571edce7a5e80ff"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();

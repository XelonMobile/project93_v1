const firebaseConfig = {
      apiKey: "AIzaSyDfYSqbZyWByt7gfbJ5x3dPYfMVibHBA_I",
      authDomain: "project-kwitter-6431a.firebaseapp.com",
      databaseURL: "https://project-kwitter-6431a-default-rtdb.firebaseio.com",
      projectId: "project-kwitter-6431a",
      storageBucket: "project-kwitter-6431a.appspot.com",
      messagingSenderId: "970059802713",
      appId: "1:970059802713:web:62e366b91d94d4a714e948"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

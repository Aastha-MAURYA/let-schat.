var firebaseConfig = {
  apiKey: "AIzaSyBOPJzJx3LGRW0oSjFixSsYpEO7a8VSuhI",
  authDomain: "chat-dd868.firebaseapp.com",
  projectId: "chat-dd868",
  storageBucket: "chat-dd868.appspot.com",
  messagingSenderId: "461129943332",
  appId: "1:461129943332:web:99ae80242a9e98dc2c4bb1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";

            firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
      }
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code

     //End code
     });});}
getData();
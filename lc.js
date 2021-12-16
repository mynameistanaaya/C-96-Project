
var firebaseConfig = {
    apiKey: "AIzaSyAdOFwtr51DuPBeV7VdP5t_APkm9rbY-Rg",
    authDomain: "kwitter-d2a08.firebaseapp.com",
    databaseURL: "https://kwitter-d2a08-default-rtdb.firebaseio.com",
    projectId: "kwitter-d2a08",
    storageBucket: "kwitter-d2a08.appspot.com",
    messagingSenderId: "901654232350",
    appId: "1:901654232350:web:2a18317c2af69e825add0f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){

    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);
   
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user name by Tanaaya"
    });
    window.location = "lc_room.html";

}
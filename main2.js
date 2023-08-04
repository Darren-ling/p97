var firebaseConfig = {
    apiKey: "AIzaSyCTUdg_COPI5qbTfROaFj_KRv9fpkmzdA4",
    authDomain: "witterbot-6a85f.firebaseapp.com",
    databaseURL: "https://witterbot-6a85f-default-rtdb.firebaseio.com",
    projectId: "witterbot-6a85f",
    storageBucket: "witterbot-6a85f.appspot.com",
    messagingSenderId: "28121194544",
    appId: "1:28121194544:web:1bb247dd61c7c630c9cdf5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  userName=localStorage.getItem("userName");
document.getElementById("welcomeusername").innerHTML="welcome "+userName
function addRoom() {
    add_Room = document.getElementById("textbox2").value
    firebase.database().ref("/").child(add_Room).update({
        purpose:"adding room name"
    });
    localStorage.setItem("room_name",add_Room);

    window.location = "index3.html";
}

function getData() {
    firebase.database().ref("/").on('value',function(snapshot){
        document.getElementById("d1").innerHTML="";
        snapshot.forEach(function(childsnapshot){
            childKey = childsnapshot.key;
            Room_names = childKey;
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("d1").innerHTML+=row
        })
    })
}
getData()

function redirectToRoomName(name){
    localStorage.setItem("room_name",name);
    window.location = "index3.html";
}

function logOut(){
    localStorage.removeItem("userName");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
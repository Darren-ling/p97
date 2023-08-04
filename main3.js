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
  room_name=localStorage.getItem("room_name");

  function logOut(){
    localStorage.removeItem("userName");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

function send(){
    msg=document.getElementById("textbox2").value;
    firebase.database().ref(room_name).push({
        name: userName,
        message: msg,
        like: 0
    });
    document.getElementById("textbox2").value="";
}

function getData(){
    firebase.database().ref("/"+room_name).on('value',
    function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childkey !="purpose") {
                firebase_message_id = childKey;
                message_data = childDate;
                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];
                name_with_tag = "<h4>" + name + "<img class'user_tick' src='tick.png'></h4>";
                
            }
        })
    })
}
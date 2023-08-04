function addUser(){
    userName = document.getElementById("textbox1").value;
    localStorage.setItem("userName",userName);
    window.location = "index2.html"
}

function addUser(){
    user= document.getElementById("user_name").value
    localStorage.setItem("user_name_Key",user);
    window.location = "kwitter_room.html";
}

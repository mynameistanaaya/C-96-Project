user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function Send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";  
}

function getData()
{
    firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; })
    firebase_message_id = childKey;
    message_data = childData;
    console.log(firsbase_message_id);
    console.log(message_data);
    name = message_data ['name'];
    message = message_data ['message'];
    like = message_data['like'];
    name_with_tag = "<h4> " + name +"<img class='user_tick' scr='tick.png'></h4>";
    like_button = "<button class='btn btn-warning' id=" +firebase_message_id+ "value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphiconn glyphicon-thumbs-up'>Like: "+like+" </span></button><hr>";

    row = name_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
} 
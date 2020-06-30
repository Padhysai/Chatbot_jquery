var username = "";

function send_message(message){
    var prevState = $("#container").html();
    //console.log(prevState.length);

    if(prevState.length > 10){
        prevState = prevState + "<br>";
    }

    $("#container").html(prevState + "<span class = 'current_message'>"+"<span class = 'bot'>ChatBot: </span>" + message + "</span>");
    $(".current_message").hide();
    $(".current_message").delay(500).fadeIn();
    $(".current_message").removeClass("current_message");
}

function get_username(){
    send_message("Hello, What is your name ?")
}
function bot_func(message){
    if (username.length < 3){
        username = message;
        send_message("Nice to meet you "+ username + ", how are you doing?");
    }
    if (message.toLowerCase().indexOf("how are you")>=0){
        send_message("Thanks, I am good!");
    }
}

$(function(){
    get_username();
    $("#textbox").keypress(function(event){
        if(event.which==13){
            if($("#enter").prop("checked") ){
                 $("#send").click();
                event.preventDefault();
            }
        }
    });
    $("#send").click(function(){
        var usename = "<span class = 'username'= >You: </span>";
        var newMessage = $("#textbox").val();
        $("#textbox").val("");

        var prevState = $("#container").html();
        //console.log(prevState.length);

        if(prevState.length > 10){
            prevState = prevState + "<br>";
        }

        $("#container").html(prevState + usename + newMessage);

        $("#container").scrollTop($("#container").prop("scrollHeight"));

        bot_func(newMessage);

    });
});
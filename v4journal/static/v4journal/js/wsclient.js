var chatSocket = new WebSocket(
    'ws://' + window.location.host + '/ws/vepp4journal/'
);

chatSocket.onmessage = function(e) {
    var data = JSON.parse(e.data);
    var message = data['message'];
    if(message.type == "send_message"){
        $(document).trigger("orbit_changed", [message.pv,message.value]);
    }
    else if(message.type == "pvs"){
        console.log(message.pvs);
        $(document).trigger("pvs_lastdata", message.pvs);
    }
};

chatSocket.onclose = function(e) {
    console.error('Chat socket closed unexpectedly');
};

function sendMessageToServer(message) {
    if (chatSocket.readyState === 1) {
        console.log("SEND")
        chatSocket.send(message);
    } else {
        setTimeout(function () {
            sendMessageToServer(message);
        }, 1000);
    }
}

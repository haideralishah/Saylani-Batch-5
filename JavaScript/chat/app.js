
var msgRef = document.getElementById('msg');
var allMsgRef = document.getElementById('all-messages');
function sendMsg() {
    console.log(msgRef.value);
    chat = {
        senderId: 'aE3VqOdTsKZZXElW7Z9y7BX3wfJ3', // abc@check.com
        receiverId: 'c5XbnYOmcwOIJDQHvF9QwsOoG6z1', // asad@gmail.com
        msg: msgRef.value,
        timeStamp: Date.now(),

    };
    firebase.database().ref('/messages/').push(chat);
}

function bringChat() {
    
    firebase.database().ref('/messages/').on('child_added', (msgSnapshot) => {
        console.log(msgSnapshot.val());
        var msgObject = msgSnapshot.val();
        /*
        if( 
            (msgObject.senderId === firebase.auth().currentUser.uid && 
             msgObject.receiverId === variableContainingReceiverId) ||

            (msgObject.receiverId === firebase.auth().currentUser.uid && 
             msgObject.senderId === variableContainingReceiverId)

        )          
           
*/
        if (
            (msgObject.senderId === 'aE3VqOdTsKZZXElW7Z9y7BX3wfJ3' &&
                msgObject.receiverId === 'c5XbnYOmcwOIJDQHvF9QwsOoG6z1' &&
                addId === 'rewrwerfsdafsdaf'
            ) ||

            (msgObject.senderId === 'c5XbnYOmcwOIJDQHvF9QwsOoG6z1' &&
                msgObject.receiverId === 'aE3VqOdTsKZZXElW7Z9y7BX3wfJ3' && 
                addId === 'rewrwerfsdafsdaf'
            )

        ) {
            var msgElement = createMsgElement(msgObject.msg)
            allMsgRef.appendChild(msgElement);
        }
    });
}

function createMsgElement(msg) {
    var div = document.createElement('div');
    var msgText = document.createTextNode(msg);
    div.appendChild(msgText);
    return div;
}




/*
chat = {
    senderId: 'ffdsafe3q42',
    receiverId: 'sdafre127487cxv',
    msg: msgRef.value,
    timeStamp: Date.now()
}


*/
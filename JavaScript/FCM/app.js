const messaging = firebase.messaging();
messaging.usePublicVapidKey("BPeF6OQJY1ydvgYRcIkJJNMKmsTQd4NUpgIS-2Rc5W8HR7Yo7Jy8EDOK8Gafi-xwVEcsgK5o2MujFRyv3Wshvxs");


messaging.requestPermission().then(function () {
    console.log('Notification permission granted.');
    // TODO(developer): Retrieve an Instance ID token for use with FCM.
    // ...


    messaging.getToken().then(function (currentToken) {
        console.log('this is token: ', currentToken)

        // if (currentToken) {
        //     sendTokenToServer(currentToken);
        //     updateUIForPushEnabled(currentToken);
        // } else {
        //     // Show permission request.
        //     console.log('No Instance ID token available. Request permission to generate one.');
        //     // Show permission UI.
        //     updateUIForPushPermissionRequired();
        //     setTokenSentToServer(false);
        // }
    }).catch(function (err) {
        console.log('An error occurred while retrieving token. ', err);
        // showToken('Error retrieving Instance ID token. ', err);
        // setTokenSentToServer(false);
    });




}).catch(function (err) {
    console.log('Unable to get permission to notify.', err);
});


if ('serviceWorker' in navigator) {
    console.log('serviceworker is available.');
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(() => {
            console.log('myservice worker registered.');
        })
        .catch((err) => {
            console.log('err', err)
        })
}














A
B

{

    senderUid: 'A',
    receiverUid: 'B',
    msg: 'hello friends',
    date:546578321571123
}

{

    senderUid: 'B',
    receiverUid: 'A',
    msg: 'hello friends',
    date:546578321571123
}


{

    senderUid: 'A',
    receiverUid: 'C',
    msg: 'hello friends',
    date:546578321571123
}
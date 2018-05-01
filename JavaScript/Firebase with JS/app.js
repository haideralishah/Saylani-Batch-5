var auth = firebase.auth();
var db = firebase.database();



function signInUser(emailRef, passRef) {

    let userObject = {
        email: document.getElementById(emailRef).value,
        password: document.getElementById(passRef).value
    }

    auth.signInWithEmailAndPassword(userObject.email, userObject.password)
        .then((success) => {
            console.log('success ', success);
            db.ref(`users/${success.uid}/`).once('value', (snapshot) => {
                // console.log('snapshot', snapshot.key, snapshot.val());
                var userFetchedData = snapshot.val();
                // userFetchedData.uid = snapshot.key;
                console.log(userFetchedData);
                localStorage.setItem('userData', JSON.stringify(userFetchedData));
                location = 'todos.html'
            })


        })
        .catch((err) => {
            console.log('err ', err);
            document.getElementById('error').style.display = 'block';
            document.getElementById('error').innerHTML = `<strong>Error!</strong> ${err.message}`;
            setTimeout(() => {
                document.getElementById('error').style.display = 'none';
            }, 3000);
        })

    // console.log(userObject, 'userObject');

}











function createAccount(emailRef, passRef, userNameRef, rollNumRef) {

    let userObject = {
        email: document.getElementById(emailRef).value,
        password: document.getElementById(passRef).value,
        userName: document.getElementById(userNameRef).value,
        rollNumber: document.getElementById(rollNumRef).value,
    }
    console.log(userObject, 'userObject');

    auth.createUserWithEmailAndPassword(userObject.email, userObject.password)
        .then((success) => {
            console.log('success ', success);
            delete userObject.password;
            db.ref(`users/${success.uid}/`).set(userObject);


        })
        .catch((err) => {
            console.log('err ', err);
            document.getElementById('error').style.display = 'block';
            document.getElementById('error').innerHTML = `<strong>Error!</strong> ${err.message}`;
            setTimeout(() => {
                document.getElementById('error').style.display = 'none';
            }, 3000);
        })


    // return false;
}












function signoutUser() {
    auth.signOut()
        .then((success) => {
            localStorage.clear();
            location = 'index.html';
        })
}




function addTodo(todoRef) {
    var todo = document.getElementById(todoRef).value;
    var userUid = auth.currentUser.uid;

    console.log(userUid)
    db.ref(`todos/${userUid}/`).push(todo);
    db.ref(`todos/${userUid}/`).once("value",(data)=>{
        var userTodo = data.val()

        console.log(userTodo)
        for(var key in userTodo){
            console.log(userTodo[key])
        }

    })
}


function getMyTodoes() {
    // var userUid = auth.currentUser.uid;
    var userdata = localStorage.getItem('userData');
    userdata = JSON.parse(userdata);
    var allTodoes = document.getElementById('my-todo');


    db.ref(`todos/${userdata.uid}/`).on('child_added', (snapshot) => {
        // console.log('abcd', snapshot.val());
        var createdLi = crateElement(snapshot.val(), 'LI', 'list-group-item')
        console.log('abcd', createdLi);
        allTodoes.appendChild(createdLi);

    })
}

function crateElement(text, element, className) {
    var li = document.createElement(element);
    var textNode = document.createTextNode(text);
    li.appendChild(textNode);
    li.setAttribute('class', className);
    return li;
}
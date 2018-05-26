var emailRef = document.getElementById('email');
var passwordRef = document.getElementById('password');
var usernameRef = document.getElementById('username');
var phoneRef = document.getElementById('phone');


function signup() {
    console.log('signup invoke', emailRef.value, passwordRef.value, usernameRef.value, phoneRef.value);
    firebase.auth().createUserWithEmailAndPassword(emailRef.value, passwordRef.value)
        .then((success) => {
            console.log('signup successfully', success);
            location = './login.html'
        })
        .catch((error) => {
            console.error('something went wrong', error);
        })
}



function login() {
    console.log('login invoke', emailRef.value, passwordRef.value);
    firebase.auth().signInWithEmailAndPassword(emailRef.value, passwordRef.value)
        .then((success) => {
            console.log('signin successfully', success);
            location = './home.html';
        })
        .catch((error) => {
            console.log('something went wrong', error)
        })
}

var todoRef = document.getElementById('todo');
var priorityRef = document.getElementById('priority');

function addTodo() {
    // console.log('hello', todoRef.value, priorityRef.value);
    var todoObject = {
        todo: todoRef.value,
        priority:priorityRef.value
    }
    console.log(todoObject);
    //set
    //push
    firebase.database().ref('/').push(todoObject);
}
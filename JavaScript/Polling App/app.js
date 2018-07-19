var emailRef = document.getElementById('email');
var passwordRef = document.getElementById('password');
var usernameRef = document.getElementById('username');
var phoneRef = document.getElementById('phone');
var errorRef = document.getElementById('error');

function signup() {
    console.log('signup invoke', emailRef.value, passwordRef.value, usernameRef.value, phoneRef.value);
    firebase.auth().createUserWithEmailAndPassword(emailRef.value, passwordRef.value)
        .then((success) => {
            console.log('signup successfully', success);
            location = './login.html';
        })
        .catch((error) => {
            console.error('something went wrong', error);
            errorRef.innerHTML = error.message;
        })
}



function login() {
    console.log('login invoke', emailRef.value, passwordRef.value);
    firebase.auth().signInWithEmailAndPassword(emailRef.value, passwordRef.value)
        .then((success) => {
            console.log('signin successfully', success.user);
            localStorage.setItem('currentUserUid', success.user.uid)
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
        priority: priorityRef.value
    }
    console.log(todoObject);
    //set is used to override and set the current data
    //push is used to add new data and keep the privous one.

    let currentUserUid = firebase.auth().currentUser.uid;
    firebase.database().ref('/todos/' + currentUserUid + '/').push(todoObject);
    // firebase.database().ref('/todos/Ox0aVIAwlMVM2PA5e6vrUk4OPs62/').push(todoObject);

}



var todoListRef = document.getElementById('todo-list');
function fetchTodos() {
    // Reactive
    // Non Reactive
    let currentUserUid = localStorage.getItem('currentUserUid');
    firebase.database().ref('/todos/' + currentUserUid + '/' + savedUid + '/').on('child_added', (todoSnapshot) => {
        // console.log(todoSnapshot.key, 'todoRowData');
        let allTodos = todoSnapshot.val();
        allTodos.nodeId = todoSnapshot.key;
        var cutomeTodoLi = createCustomeLi(allTodos.nodeId, allTodos.todo);
        // console.log(cutomeTodoLi);
        todoListRef.appendChild(cutomeTodoLi);
    })
}
function createCustomeLi(id, text) {
    var li = document.createElement('li');
    var textEl = document.createTextNode(text);
    li.appendChild(textEl);
    li.setAttribute('id', id)

    // adding delete and edit buttons
    var deleteBtn = document.createElement('button');
    var delBtnText = document.createTextNode('Delete');
    deleteBtn.appendChild(delBtnText);
    deleteBtn.onclick = function (event) {
        let currentUserUid = localStorage.getItem('currentUserUid');
        console.log('delete called ', event.path[1].id);
        firebase.database().ref('/todos/' + currentUserUid + '/' + event.path[1].id + '/').remove();
    }
    li.appendChild(deleteBtn);
    return li;
}

let currentUserUid = localStorage.getItem('currentUserUid');
firebase.database().ref('/todos/' + currentUserUid + '/').on('child_removed', (snapshot) => {
    let deletedTodo = snapshot.val();
    deletedTodo.key = snapshot.key;
    var nodeToRemove = document.getElementById(deletedTodo.key);
    todoListRef.removeChild(nodeToRemove);
})











/**************  Polling App  **************/

function createPollRoute() {
    location = './createPoll.html';
}

var pollNameRef = document.getElementById('pollName');
var pollQuestionRef = document.getElementById('pollQuestion');
var optionARef = document.getElementById('optionA');
var optionBRef = document.getElementById('optionB');
function createPoll() {
    console.log('hello world')
    var pollObject = {
        pollName: pollNameRef.value,
        pollQuestion: pollQuestionRef.value,
        optionA: pollNameRef.value,
        optionB: optionBRef.value,
    }
    console.log(pollObject);

    let currentUserUid = firebase.auth().currentUser.uid;
    firebase.database().ref('/' + currentUserUid + '/').push(pollObject);
}

// var todoRef = document.getElementById('todo');
// var todoListRef = document.getElementById('todo-list');

// function addTodo() {
//     // console.log('Hello', todoRef.value);
//     var customeLi = createCustomeElement('li', todoRef.value);
//     // console.log(customeLi);
//     todoListRef.appendChild(customeLi);
//     todoRef.value = '';
// }

// function createCustomeElement(element, customeText) {
//     var myEl = document.createElement(element);
//     var myText = document.createTextNode(customeText);
//     myEl.appendChild(myText);
//     // console.log(myEl)
//     return myEl;
// }






























/*

// add todo example with firebase

var todoRef = document.getElementById('todo');
var todoListRef = document.getElementById('todo-list');
var db = firebase.database();

function addTodo() {
    // console.log('Hello', todoRef.value);
    var myTodo = todoRef.value;
    var myPriority = 'important';
    db.ref(`/myTodo/${myPriority}/`).push(myTodo);
    todoRef.value = '';

    // db.ref(`/myTodo/${myPriority}/`).set(myTodo);

    /*
        todo {
            important {
                fasdfads;jlfkasdjfk: office work
            }
        }
    */
// }



/*
function fetchTodos() {
    db.ref(`/myTodo/important/`).on('child_added', (todoSnapshot) => {
        var todos = todoSnapshot.val();
        var todoKey = todoSnapshot.key;
        console.log(todos);
        var myLi = createCustomeElement('li',todos, todoKey);
        todoListRef.appendChild(myLi);
    })

    // db.ref(`/myTodo/important/`).off();

    // db.ref(`/myTodo/important/`).once('value', (todoSnapshot) => {
    //     var todos = todoSnapshot.val();
    //     for (var key in todos) {
    //         console.log(todos[key]);
    //     }

    // })
}




function createCustomeElement(element, customeText, idName) {
    var myEl = document.createElement(element);
    var customeBtn = document.createElement('button');
    var editBtnText = document.createTextNode('edit');

    customeBtn.onclick = function(ev){
        console.log('hello',ev.path[1].childNodes);
        todoRef.value =ev.path[1].childNodes[0].nodeValue


    }

    customeBtn.appendChild(editBtnText);
    var myText = document.createTextNode(customeText);
    myEl.appendChild(myText);
    myEl.appendChild(customeBtn);

    myEl.setAttribute('id', idName);
    // console.log(myEl)
    return myEl;
}

*/




var url = 'https://dog.ceo/api/breeds/image/random';

fetch(url)
    .then((res) => {
        console.log(res);
        return res.json()
    })
    .then((res) => {
        console.log(res);
        // return res.json()
    })



function fetchCall() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => {
            console.log(res);
            return res.json()
        })
        .then((res) => {
            console.log(res);
            // return res.json()
        })
        .catch((err) => {
            console.log(err);
        })
}
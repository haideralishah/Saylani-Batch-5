// variable for std name
var stdName = document.getElementById('name');
// variable for DOB
var DOB = document.getElementById('DOB');
// variable for roll no
var rollNo = document.getElementById('roll');
// variable for error element
var errorEl = document.getElementById('error');
// array for all users
var userArr;

function getInput() {
    if (stdName.value !== '' && DOB.value !== '' && rollNo.value !== '') {
        // create user object
        var user = new GenerateObject(stdName.value, DOB.value, rollNo.value);
        // push new user to existing array
        var localStorageData = localStorage.getItem('users')
        if (localStorageData !== null) {
            userArr = JSON.parse(localStorageData);
        }
        else {
            userArr = [];
        }
        userArr.push(user);
        localStorage.setItem('users', JSON.stringify(userArr));
    } else {
        // error if fields are empty
        errorEl.innerHTML = 'Please fill all the fields';
    }
}
// constructor function
function GenerateObject(stdName, DOB, roll) {
    this.studentName = stdName;
    this.dateOfBirth = DOB;
    this.rollNo = roll;
}








var recordsEl = document.getElementById('records');
function printUserInformation() {
    console.log('print fucntion called');
    var localStorageData = localStorage.getItem('users')
    if (localStorageData !== null) {
        userArr = JSON.parse(localStorageData);
        for (var i = 0; i < userArr.length; i++) {
            var elementToAppend = createElement('p', userArr[i].studentName);
            recordsEl.appendChild(elementToAppend);
        }
    }
    else {
        recordsEl.innerHTML = 'No Record Found';
    }
}
function createElement(el, text) {
    console.log(el, text);
    var p = document.createElement(el);
    var textNode = document.createTextNode(text);
    p.appendChild(textNode);   
    return p;
}
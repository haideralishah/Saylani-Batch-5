// var heading1 = document.getElementById('user-name');
// var userInput = document.getElementById('user-input');


// function printName() {
//     // var userInput = prompt('what is your name?');    
//     heading1.innerHTML = '<i>This is ' + userInput.value + '.</i>';
// }











/********* PDF 21-25****** */


/////////////////Question 1

// var firstNameInput = document.getElementById('first-name');
// var lastNameInput = document.getElementById('last-name');
// var greetUser = document.getElementById('greet-user');

// function printGreet(){
//     var fullName = firstNameInput.value + ' ' + lastNameInput.value;
//     greetUser.innerHTML = fullName;
// }

/////////////////Question 1










/////////////////Question 2


// var mobileModel = document.getElementById('mobile-model');
// var model = document.getElementById('model');
// var modelLength = document.getElementById('length');

// function printMobileModel(){    
//     model.innerHTML = 'My favourite mobile model is ' + mobileModel.value;
//     modelLength.innerHTML = 'Model Length is ' + mobileModel.value.length;
// }







/////////////////Question 2


/////////////////Question 3







// var stringName = document.getElementById('string-name');
// var cherName = document.getElementById('cher-name');
// var userString = document.getElementById('user-string');
// var result = document.getElementById('result');


// function findIndex() {
//     var stringNameValue = stringName.value;
//     var cherNameValue = cherName.value;
//     console.log(stringNameValue, cherNameValue)
//     var requiredIndex = stringNameValue.indexOf(cherNameValue)

//     userString.innerHTML = stringNameValue;
//     result.innerHTML = 'index of ' + cherNameValue + ' is ' + requiredIndex;
// }








/////////////////Question 3

var originalStr = document.getElementById('original');
var findStr = document.getElementById('find');
var replaceStr = document.getElementById('replace');
var originalStringResult = document.getElementById('original-string');
var updatedStringResult = document.getElementById('updated-string');

function replace() {
    var originalStrValue = originalStr.value;
    var updatedValue;
    var findStrValue = findStr.value;
    for (var i = 0; i < originalStrValue.length; i++) {
        if (originalStrValue.slice(i, i + findStrValue.length) === findStrValue) {
            updatedValue = originalStrValue.slice(0, i + findStrValue.length) + replaceStr.value + originalStrValue.slice(replaceStr.length);
        }
    }
    originalStringResult.innerHTML = originalStrValue;
    updatedStringResult.innerHTML = updatedValue;


}







/////////////////Question 7







/////////////////Question 7




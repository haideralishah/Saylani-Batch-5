// function checkForLastName() {
//     console.log('hello world');
//     var targetNodeEl = document.getElementById('lastNameField');
//     if (targetNodeEl.value.length === 0) {
//         console.log('Last name is required!');
//         targetNodeEl.focus();
//         targetNodeEl.style.backgroundColor = 'yellow';
//         setTimeout(function () {
//             targetNodeEl.style.backgroundColor = 'white';
//         }, 200);
//     }
//     return false;
// }










// function checkForLastName() {
//     console.log('hello world');
//     var targetNodeEl = document.getElementById('lastNameField');
//     if (targetNodeEl.value.length === 0) {
//         console.log('Last name is required!');
//         targetNodeEl.focus();
//         targetNodeEl.style.backgroundColor = 'yellow';
//         var count = 0;
//         var changeFormFieldColor = setInterval(function () {
//             if (count % 2 === 0) {
//                 targetNodeEl.style.backgroundColor = 'yellow';
//             }
//             else {
//                 targetNodeEl.style.backgroundColor = 'white';
//             }
//             count++;
//             if(count === 6){
//                 clearInterval(changeFormFieldColor);
//                 count = 0;
//             }
//         }, 100);
//     }
//     return false;
// }
















// function checkForSelection(el) {
//     var targetNodeEl = document.getElementById(el);
//     console.log(targetNodeEl.selectedIndex);
//     if (targetNodeEl.selectedIndex === 0) {
//         alert('Select a state.');
//     }
//     return false;
// }























// function validateRadios(elRef) {
//     var radios = document.getElementsByName(elRef);
//     console.log(radios);
//     for (var i = 0; i < radios.length; i++) {
//         if (radios[i].checked) {
//             return false;
//         }
//     }
//     alert("Please check one.");
//     return false;
// }



// function validationZip(elRef) {
//     console.log(document.getElementById(elRef).value);
//     var userInput = document.getElementById(elRef).value;
//     console.log(typeof userInput);
//     userInput = parseInt(userInput);
//     console.log(typeof userInput);
//     console.log(userInput, isNaN(userInput));
//     if (isNaN(userInput)) {
//         alert('You wrote wrong zip code. Zip only contains numbers.')
//     }

//     return false;
// }









// function validateEmail() {
//     console.log('hello')

//     // var addressIsLegal = true;
//     var eEntered = document.getElementById("address").value;
//     if (eEntered.indexOf(' ') !== -1) {
//         console.log('inside first if')
//         addressIsLegal = false;
//     }
//     console.log(eEntered.indexOf("@"), eEntered.length - 5);

//     if (eEntered.indexOf("@") < 1 || eEntered.indexOf("@") > eEntered.length - 5) {
//         console.log('inside  if')
//         addressIsLegal = false;
//     }
//     if (addressIsLegal !== true) {
//         alert("Please correct email address");
//     }


//     // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     // console.log(re.test(eEntered));



//     return false;
// }



















// function doSomething() {
//     try {
//         cosnole.log('hello');
//     }
//     catch (err) {
//         console.log('Error: ', err);
//         document.getElementById('errorId').innerHTML = 'Sorry! Something went wrong. Please try later.';
//     }
// }






















// function checkPassword() {
//     try {
//         var pass = document.getElementById("f1").value;
//         if (pass.length < 8) {
//             throw "Please enter at least 8 characters.";
//         }
//         if (pass.indexOf(" ") !== -1) {
//             throw "No spaces in the password, please.";
//         }
//         var numberSomewhere = false;
//         'haiderali'
//         for (var i = 0; i < pass.length; i++) {
//             if (isNaN(pass.slice(0, i + 1)) === false) {
//                 numberSomewhere = true;
//                 break;
//             }
//         }
//         if (numberSomewhere === false) {
//             throw "Include at least 1 number.";
//         }
//     }
//     catch (err) {
//         // alert(err);
//         document.getElementById('errorId').innerHTML = err;

//     }
//     return false;
// }














var clickBtn = document.getElementById('click');
clickBtn.onclick = clickFunc;

function clickFunc() {
    console.log('hello world');
}


























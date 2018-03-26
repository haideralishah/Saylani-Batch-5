

//localstorage.setItem('userData', 'header@gmail.com')
//localstorage.getItem('userData')
// only saves strings 


//JSON.stringify()
//JSON.parse()



// var emailEl = document.getElementById('email');
// var passwordEl = document.getElementById('password');
// function signUp() {
//     console.log(emailEl.value, passwordEl.value);
//     if (localStorage !== null) {
//         console.log('local storage available');
//         localStorage.setItem('email', emailEl.value);
//         localStorage.setItem('password', passwordEl.value);

//     }
// }


// function signIn() {
//     // console.log(emailEl.value, passwordEl.value);
//     var userEmail = localStorage.getItem('email');
//     var userPassword = localStorage.getItem('password');
//     if (emailEl.value === userEmail && passwordEl.value === userPassword) {
//         console.log('User authorized.');
//     }
//     else{
//         console.log('User does not exist, you need to signup.');
//     }
// }



// var userFaiz = {
//     glasses: true,
//     height: 6,
//     education: 'SE'
// }

// user.glasses

var emailEl = document.getElementById('email');
var passwordEl = document.getElementById('password');
function signUp() {
    // console.log(emailEl.value, passwordEl.value);
    if (localStorage !== null) {
        var user = {
            email: emailEl.value,
            password: passwordEl.value
        }
        var usersSavedArr;
        if (localStorage.getItem('allSignedUpUsers') !== null) {
            // console.log(localStorage.getItem('allSignedUpUsers'));
            usersSavedArr = JSON.parse(localStorage.getItem('allSignedUpUsers'));
            // console.log(usersSavedArr);
        }
        else {
            usersSavedArr = [];
        }

        usersSavedArr.push(user);
        // console.log(usersSavedArr)
        // console.log(JSON.stringify(usersSavedArr));

        localStorage.setItem('allSignedUpUsers', JSON.stringify(usersSavedArr));

    }
}
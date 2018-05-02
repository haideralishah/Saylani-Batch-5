// // var userInputEl = document.getElementById('userinput');
// // var resultEl = document.getElementById('result');

// // function checkDivisible(){
// //     var userInputVal = userInputEl.value;
// //     if(userInputVal % 3 === 0){
// //         console.log('“Number is divisible by 3”');
// //         resultEl.innerHTML = '“Number is divisible by 3”';
// //     }
// //     else{
// //         console.log('“Number is not divisible by 3”');
// //         resultEl.innerHTML = '“Number is not divisible by 3”';
// //     }
// // }








// // var userInputEl = document.getElementById('userinput');
// // var resultEl = document.getElementById('result');
// // var myName = 'haider';

// // function checkUserName(){
// //     if(userInputEl.value === myName){
// //         // console.log('hi, we have same names');
// //         resultEl.innerHTML = 'hi, we have same names';
// //     }
// //     else{
// //         resultEl.innerHTML = '';
// //     }

// // }
















// var originalStr = document.getElementById('original');
// var findStr = document.getElementById('find');
// var replaceStr = document.getElementById('replace');
// var originalStringResult = document.getElementById('original-string');
// var updatedStringResult = document.getElementById('updated-string');

// function replace() {
//     var originalStrValue = originalStr.value;
//     var updatedValue;
//     var findStrValue = findStr.value;
//     var replaceStrValue = replaceStr.value 
//     // console.log(originalStrValue,'originalStrValue');
//     // console.log(updatedValue,'updatedValue');
//     // console.log(findStrValue,'findStrValue');
//     // console.log(replaceStrValue,'replaceStrValue');



//     for (var i = 0; i < originalStrValue.length; i++) {
//         if (originalStrValue.slice(i, i + findStrValue.length) === findStrValue) {
//             console.log( updatedValue = originalStrValue.slice(0, i) + replaceStrValue + originalStrValue.slice(i + findStrValue.length));
//             updatedValue = originalStrValue.slice(0, i) + replaceStrValue + originalStrValue.slice(i + findStrValue.length);
//         }
//     }


//     originalStringResult.innerHTML = originalStrValue;
//     updatedStringResult.innerHTML = updatedValue;
// }









// // var pets = ['dog','cat','fly','bug','ox'];
// // // pets.splice(2, 2, "pig", "duck", "emu");
// // // pets.splice(2, 0, "pig", "duck", "emu");

// // // pets.splice(3, 2);
// // console.log(pets)



















// // var originalStr = document.getElementById('original');
// // var findStr = document.getElementById('find');
// // var replaceStr = document.getElementById('replace');
// // var originalStringResult = document.getElementById('original-string');
// // var updatedStringResult = document.getElementById('updated-string');



// // function printHello(){
// //     originalStringResult.innerHTML = 'hello world';
// // }


// // 




// var originalStringResult = document.getElementById('original-string');
// function greetUser(){
//     originalStringResult.innerHTML = 'hello User';
// }



// function Createuser(stName, rollNumber) {
//     this.stName = stName;
//     this.rollNumber = rollNumber;
// }

// Createuser.prototype.orgName = 'Saylani';

// var user1 = new Createuser('rabeet', 2643);
// user1.orgName = 'Fa Saylani';
// console.log(user1);
// console.log(JSON.stringify(user1));



// localStorage.setItem('user', JSON.stringify(user1));


// var user = localStorage.getItem('user');
// user = JSON.parse(user);
// console.log(user);



console.log('hello world')




































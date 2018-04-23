// function alerUserGreet() {
//     return new Promise(function (resolve, reject) {
//         var currentTime = new Date().getMinutes();
//         if (currentTime % 2 === 0) {
//             resolve('Condition Matched.');
//         }
//         else {
//             reject('Condition Not Matched.');
//         }
//     });
// }

// alerUserGreet()
//     .then(function (msg) {
//         console.log('Message: ', msg)
//     })
//     .catch(function (err) {
//         console.error('Error: ', err);
//     })




































// function alerUserGreet() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             var currentTime = new Date().getSeconds();
//             if (currentTime % 2 === 0) {
//                 resolve('Condition Matched.');
//             }
//             else {
//                 reject('Condition Not Matched.');
//             }
//         }, 1000);
//     });
// }

// alerUserGreet()
//     .then(function (msg) {
//         console.log('Message: ', msg)
//     })
//     .catch(function (err) {
//         console.error('Error: ', err);
//     })

























// console.log("haider \n ali");

// console.log(`haider ali 
// shah 
// students
// 2643
// haider`)

















// var userName = 'Haider';
// var feePerSubject = 1500;
// var totalSubjects = 5;

// console.log(userName + '! your total fees is ' + feePerSubject * totalSubjects);

// console.log(`${userName}! your total fees is ${feePerSubject * totalSubjects}`);





// var a = 5;
// var b = 10;
// console.log(`Fifteen is ${a + b} and
// not ${2 * a + b}.`);
// // "Fifteen is 15 and
// // not 20."
















// setTimeout(function () {
//     console.log('first setTimeout');
// }, 1000);

// function secondSetTimeOut() {
//     console.log('second settimeout');
// }
// setTimeout(secondSetTimeOut, 1000);

// setTimeout(() => {
//     console.log('arrow function')
// }, 1000);





















function alerUserGreet() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var currentTime = new Date().getSeconds();
            if (currentTime % 2 === 0) {
                resolve('Condition Matched.');
            }
            else {
                reject('Condition Not Matched.');
            }
        }, 1000);
    });
}
alerUserGreet()
    .then(msg => console.log('Message: ', msg))
    .catch(error => console.error('Error: ', error))








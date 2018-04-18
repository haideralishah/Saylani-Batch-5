

// promise
// sync 
// alert

// async
// http request


// var i = 0;
// setTimeout(function () {
//     console.log('haider', i++);
// }, 1000);

// setTimeout(function () {
//     console.log('second', i++);
// }, 1000);

// console.log('setTimeout finished');
// for(var j = 0; j < 100000; j++){
//     console.log(j)
// }
// setTimeout(function () {
//     console.log('third', i++);
// }, 1000);





// var i = 0;

// function showConfirm() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log('second', i++);
//             resolve();
//         }, 1000);
//     })
// }
// showConfirm()
//     .then(function () {
//         console.log('setTimeout finished');
//     })






































// var i = 0;

// function showConfirm(num) {
//     return new Promise(function (resolve, reject) {
//         var randomeNumber = Math.floor(Math.random() * 11);
//         if (num / randomeNumber % 2 === 0) {
//             console.log('inside promise if', randomeNumber)
//             var obj = { exBlock: 'inside if', flagBool: (num / randomeNumber % 2 === 0) }
//             resolve(obj);
//         }
//         else {
//             console.log('inside promise else', randomeNumber)
//             var obj = { exBlock: 'inside else', flagBool: (num / randomeNumber % 2 === 0) }
//             resolve(obj);
//         }
//     })
// }
// showConfirm(6)
//     .then(function (executionBlock) {
//         console.log(executionBlock);
//     })



































// var i = 0;
// function showConfirm() {
//     return new Promise(function (resolve, reject) {
//         var randomeNumber = Math.floor(Math.random() * 11);
//         if (randomeNumber % 2 === 0) {
//             var obj = { exBlock: 'inside if', flagBool: (randomeNumber % 2 === 0) }
//             resolve(obj);
//         }
//         else {
//             var obj = { exBlock: 'inside else', flagBool: (randomeNumber % 2 === 0) }
//             reject(obj);
//         }
//     })
// }
// showConfirm()
//     .then(function (executionBlock) {
//         console.log(executionBlock);
//     })
//     .catch(function (error) {
//         console.error('Randome number was odd. Err: ', error);
//     })







function showConfirm(numSeconds) {
    return new Promise(function (resolve, reject) {
        var randomeNumber = Math.floor(Math.random() * 11);
        if (numSeconds <= 5 && numSeconds >= 1) {
            setTimeout(function () {
                resolve(randomeNumber);
            }, numSeconds * 1000)
        }
        else {
            reject('Wrong param provided.')
        }
    })
}
showConfirm(5)
    .then(function (randomeNumber) {
        console.log('Your randome number: ', randomeNumber);
    })
    .catch(function (err) {
        console.error('Error Message: ', err);
    })


















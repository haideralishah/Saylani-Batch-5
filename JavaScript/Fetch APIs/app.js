// fetch('https://api.github.com/users/haideralishah')
//     .then(function (response) {
//         console.log(response);
//         return response.json();
//     })
//     .then(function (myJson) {
//         console.log(myJson);
//     });


fetch('https://api.github.com/users/haideralishah')
    .then((response) => {
        console.log(response, 'response');
        return response.json();
    })
    .then((userData) => {
        console.log(userData,'userData');
    })
    










// fetch('http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22')
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (myJson) {
//         console.log(myJson);
//     });















//var abc = ()=>{}
// (() => {
//     console.log('haider');
// })()

// (function abcd() {
//     console.log('haider');
// })()



// var randomNumRef = document.getElementById('randomNumbers');
// var gameStatusRef = document.getElementById('gameStatus');

// var prevRandomNumber;
// var count = 0;

// var geneRandomNumbersCallBack = () => {
//     if (count < 50) {
//         var randomeNumber = Math.ceil(Math.random() * 3);
//         if (prevRandomNumber !== randomeNumber) {
//             randomNumRef.innerHTML = randomeNumber
//             prevRandomNumber = randomeNumber;
//         }
//         else {
//             geneRandomNumbersCallBack();
//         }
//         count = count + 1;
//     }
//     else {
//         clearInterval(geneRandomNumbers);
//         if (userSelectedNumber == prevRandomNumber) {
//             console.log('You won the gamble!');
//             gameStatusRef.innerHTML = 'You won the gamble!';
//         }
//         else {
//             console.log('You lost the gamble!');
//             gameStatusRef.innerHTML = 'You lost the gamble!';
//         }
//     }
// }
// var geneRandomNumbers = setInterval(geneRandomNumbersCallBack, 100);
// var userSelectedNumber;
// var userPick = (pick, elementRef) => {
//     console.log('working', pick);
//     userSelectedNumber = pick;
//     elementRef.style.backgroundColor = 'green';
// }




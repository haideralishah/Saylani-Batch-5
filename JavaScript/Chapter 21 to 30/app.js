

// var cityToCheck = 'karachi';

// var userAns = prompt('where PSL final is going to be held?');

// if(cityToCheck.toLowerCase() === userAns.toLowerCase()){
//     console.log('correct answer');
// }
// else{
//     console.log('wrong answer');
// }









// var cities = ['karachi', 'lahore', 'islamabad'];
// var userCity = prompt('where do you live?');
// var flag = false;
// for (var i = 0; i < cities.length; i++) {
//     if (cities[i].toLowerCase() === userCity.toLowerCase()) {
//         console.log('correct answer');
//         flag = true;
//         break;
//     }
// }

// if (flag === false) {
//     console.log('wrong answer');

// }













// var pakCities = ['karachi', 'lahore', 'islamabad'];
// var userInput = prompt('where do you live?');
// var cityIndex = pakCities.indexOf(userInput.toLowerCase());

// if(cityIndex !== -1){
//     console.log('correct answer');
// }
// else{
//     console.log('wrong answer');
// }



// var userName = prompt('what is your name?');

// var firstChar = userName.slice(0, 1);
// var otherChar = userName.slice(1);
// firstChar = firstChar.toUpperCase();
// otherChar = otherChar.toLowerCase();

// var fullName = firstChar + otherChar;

// console.log(fullName);







// var userDOB= prompt('what is your birth month?');
// ocTober;

// Oct












// var userInput = prompt('any text');
// // haider ali  shah
// for (var i = 0; i < userInput.length; i++) {
//     console.log(userInput.slice(i, i + 2));
//     if (userInput.slice(i, i + 2) === '  ') {
//         console.log('double spaces found');
//         break;
//     }
// }



// var text = 'Lorem ipsum dolor World War II sit amet, consectetur adipisicing elit. Minus optio dolore incidunt, odio vero doloribus vel amet provident voluptate expedita ipsam aut corporis impedit, accusamus aliquam deserunt. Nesciunt dolores, enim?';
// console.log(text);
// //the Second World War
// for (var i = 0; i < text.length; i++) {
//     // console.log(text.slice(i, i + 12));
//     if (text.slice(i, i + 12) === 'World War II') {
//         text =text.slice(0, i) + 'the Second World War' + text.slice(i+12);
//     }
// }
// console.log(text);





// var text = 'Lorem ipsum dolor World War II sit amet, consectetur adipisicing elit. Minus optio dolore incidunt, odio vero doloribus vel amet provident voluptate expedita ipsam aut corporis impedit, accusamus aliquam deserunt. Nesciunt dolores, enim?';
// var requiredIndex = text.indexOf('World War II');
// text = text.slice(0, requiredIndex) + 'the Second World War' + text.slice(requiredIndex + 12);
// console.log(text);














// var text = 'Lorem ipsum dolor World War II sit amet, consectetur World War II adipisicing elit. Minus optio dolore incidunt, odio vero doloribus vel amet provident voluptate expedita ipsam aut corporis impedit, accusamus aliquam deserunt. Nesciunt dolores, enim?';
// text = text.replace(/World War II/g, 'the Second World War');
// console.log(text);









// var userName = 'haider ali shah';
// var indexA = userName.indexOf('a');
// var lastIndexA = userName.lastIndexOf('a');
// console.log(indexA, lastIndexA);








// 'haider'
// var userName = 'haider ali shah';
// var aliIndex = userName.indexOf('ali');
// var char5 = userName.charAt(5);
// // console.log(char5);
// var lastChar = userName.charAt(userName.length - 1);
// console.log(lastChar, '***');

























// var numA = 2.979413872;
// console.log(numA);
// console.log(Math.round(numA));
// console.log(Math.ceil(numA));
// console.log(Math.floor(numA));



















// var aRandomNumber= Math.random();
// var bRandomNumber= Math.random();
// var cRandomNumber= Math.random();
// // console.log(aRandomNumber);
// console.log(Math.ceil(aRandomNumber * 5));
// console.log(Math.ceil(bRandomNumber * 5));
// console.log(Math.ceil(cRandomNumber * 5));




// var currentAge = +prompt("Enter your age.");
// var qualifyingAge = currentAge + 1;



// var currentAge = prompt("Enter your age.");
// var qualifyingAge = parseInt(currentAge) + 1;
// console.log(parseInt(currentAge))
// console.log(qualifyingAge)


// var currentAge = prompt("Enter your age.");
// var qualifyingAge = parseFloat(currentAge) + 1;
// console.log(parseFloat(currentAge))
// console.log(qualifyingAge)



var num = '25';
console.log(num);
var strNum = Number(num);
console.log(strNum);
var againStr = strNum.toString();
console.log(againStr);
console.log(String(num));
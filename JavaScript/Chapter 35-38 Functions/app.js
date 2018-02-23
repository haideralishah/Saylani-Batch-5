



// function bringTea() {
//     // console.log('bring a cup of tea.');
//     // for(var i = 0; i < 3; i++){
//     //     console.log(i);
//     // }
//     var randomNumber = Math.ceil((Math.random() * 2))
//     if (randomNumber === 1) {
//         console.log('head');
//     }
//     else {
//         console.log('tails');
//     }
// }

// bringTea();
// bringTea();
// bringTea();
// bringTea();














// function cook(ingrd1){
//     console.log('bring ' + ingrd1);
// }

// cook('egg');

// cook('paratha');

// cook('tea');

// cook('tende');









// var numInput1 = +prompt('type a number');
// var numInput2 = +prompt('type another number');


// function sumTwoNumbers(num1, num2){
//     var sum = num1 + num2;
//     console.log(sum);
// }
// sumTwoNumbers(numInput1, numInput2);



// sumTwoNumbers(5,2);
// sumTwoNumbers(7,2);
// sumTwoNumbers(9,1);









// function subt(num_1, num_2) {
//     console.log(num_1 - num_2);
// }
// function sumTwoNumbers(num1, num2){
//     var sum = num1 + num2;
//     console.log(sum);
// }
// function evaluateCustome(num1, num2, myFunc) {
//     myFunc(num1, num2);    
// }
// evaluateCustome(5, 3, subt);
// evaluateCustome(5, 3, sumTwoNumbers);
















// function sumFunc() {
//     var sum = 0;
//     for (var i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     console.log(sum);
// }
// sumFunc(1, 2, 6, 5, 7, 9);
// sumFunc(1, 2, 3);
// sumFunc(1, 2);









// var hypSqr = perSqr + baseSqr;
// Math.sqrt();

// function calculateHyp(perSqr, baseSqr){
//     var hypSqr = perSqr + baseSqr;
//     var hyp = Math.sqrt(hypSqr);
//     console.log(hyp);
// }
// calculateHyp(8,8);


// function generateMsg(dateToCheck){
//     var message;
//     if(dateToCheck === 4){
//         message = 'Happy Birthday Haider';
//     }
//     else  if(dateToCheck === 5){
//         message = 'Wohoo! it is pay day';
//     }
//     else  if(dateToCheck === 30){
//         message = 'concentrate on your work';
//     }
//     else{
//         message = 'nothing special';
//     }
//     return message;   
// }

// var myMsg = generateMsg(4);
// console.log(myMsg);






















// printRange(5, 9);

// function printRange(startingNum, endingNum) {
//     for (var i = startingNum; i <= endingNum; i++) {

//     }
// }







// var num = 5;
// // num = 9;
// function updateNum() {
//     var num = 7;
//     console.log(num, 'inside func');
// }
// updateNum();
// console.log(num, 'outside func');







function sum(num1,num2){
    return num1 + num2;
}
function calculate(num1,num2, myFunc){
    return myFunc(num1, num2)
}
var answer;
var opera = prompt('type operator');
if(opera === '+'){
    answer = calculate(2,5, sum);
}
console.log('haider', answer);

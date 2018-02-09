

// var userInput = prompt('Who is your favorite politician?','I am');

// console.log("your answer " + userInput + " is political");







// var tableName = +prompt('which table you want to print?');
// var num = 1;
// var tableResult = tableName + ' X ' + num + ' = ' + tableName * num++
// console.log();
// console.log(tableName + ' X ' + num + ' = ' + tableName * num++);
// console.log(tableName + ' X ' + num + ' = ' + tableName * num++);
// console.log(tableName + ' X ' + num + ' = ' + tableName * num++);
// console.log(tableName + ' X ' + num + ' = ' + tableName * num++);

// console.log(tableName + ' X ' + num + ' = ' + tableName * num++);
// console.log(tableName + ' X ' + num + ' = ' + tableName * num++);






// var userCity = prompt('which city you are from?');
// var myCity = 'Karachi';
// if(userCity === myCity){
//     console.log('we are from the same city');

// }

// var userFullName = prompt('what is your full name?');
// var firstName = "Haider";
// var lastName = 'Ali';
// if(userFullName === firstName + ' ' + lastName){

//     console.log('hello haider');

// }





// var a = 2;
// var b = 3;
// var x = 5;
// var y = 7;
// var z = 2;

// if (a * b !== x) {
//     console.log('both statements are equal');
// }










// var a = 2;
// var b = 3;
// var x = 5;
// var y = 5;
// var z = 2;

// if (x >= y) {
//     console.log('both statements are equal');
// }


// var userInput = prompt('what is your name?');
// if(userInput === 'haider'){
//     console.log('Welcome Haider');
// }
// else{
//     console.log('you are not authorized.');
// }






// var userNumber = +prompt('please let us know a number');
// if (userNumber % 2 === 0){
//     console.log('even');
// }
// else{
//     console.log('odd');
// }






// var phyMarks = +prompt('your Physics marks');
// var chmMarks = +prompt('your Chemistry marks');
// var bioMarks = +prompt('your Biology marks');

// var totalMarks = 300;
// var totalObtainedMarks = phyMarks + chmMarks + bioMarks;
// var percentObt = totalObtainedMarks / totalMarks * 100;

// console.log(percentObt);

// if (percentObt >= 80) {
//     console.log('You got A+');
// }
// else if(percentObt >= 70){
//     console.log('You got A');
// }
// else if(percentObt >= 60){
//     console.log('You got B');
// }
// else if(percentObt >= 50){
//     console.log('You got C');
// }
// else if(percentObt >= 40){
//     console.log('You got D');
// }
// else if(percentObt >= 33){
//     console.log('You got E');
// }
// else if(percentObt < 33){
//     console.log('You are failed');
// }
// else{
//     console.log('something went wrong');
// }



// if (percentObt >= 80) {
//     console.log('You got A+');
// }
// else if(percentObt >= 70){
//     console.log('You got A');
// }






// var qualifyingAge = 15;
// var qualifyingCity = 'karachi'
// var yourAge = prompt('what is your age?');
// var yourCity = prompt('where do you live?');
// if(yourCity === qualifyingCity 
// yourAge >= qualifyingAge){
//    console.log('Congratulations you are selected'); 
// }
// else{
//     console.log('Sorry! You are disqualified.');
// }

// var qualifyingGender = 'female'
// var gender =  prompt('what is your gender?');
// var qualifyingAge = 15;
// var yourAge = prompt('what is your age?');

// if(qualifyingGender === gender || yourAge < qualifyingAge){
//     console.log('you are allowed');
// }
// else{
//     console.log('sorry you are not allowed.');
// }

var x = 2;
var y = 3;
var a = 5;
var b = 5;
var c = 7;
var d = 8;
var g;
var h = 3;
var e;
var f = 9;


if ((x === y || a === b) && c < d) {
    g = h;
}
else {
    e = f;
}
console.log(g, e);
if (c < d) {
    if (x === y || a === b) {
        g = h;
    }
    else {
        e = f;
    }
}


console.log(g, e);
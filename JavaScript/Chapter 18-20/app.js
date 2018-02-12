



// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');
// console.log('hello world');






//***********For Loop******** */

// for(var i = 0; i <= 100; i++){

//     console.log('hello world ' + i);

// }

// console.log('loop finished.');


// var tableName = +prompt('table name');
// var tableTimes= +prompt('table time');
// var incrementCount = +prompt('table count');

// for(var i = 1; i <= tableTimes; i = i + incrementCount){
//     console.log(tableName + ' x ' + i + ' = ' + tableName* i  );
// }













// var urbanCities = ['karachi', 'lahore', 'islamabad'];
// var userCity = prompt('where do you live?');
// var matchFlag = false;
// for (var i = 0; i < urbanCities.length; i++) {
//     console.log(i);
//     if (userCity === urbanCities[i]) {
//         console.log('cities matched');
//         matchFlag = true;
//         break;
//     }
//  }
// if (matchFlag === false) {
//     console.log('not matched');
// }











// for(var i = 1000; i > 0; i--){
//     console.log(i);

// }   


// var firstNames = ['aslam', 'akram', 'arman'];
// var lastNames = ['khan', 'ansari', 'shah'];
// var fullNames = [];
// for (var i = 0; i < firstNames.length; i++) {
//     for (var j = 0; j < lastNames.length; j++) {
//         // console.log(firstNames[i] + ' ' + lastNames[j]);
//         var fullName = firstNames[i] + ' ' + lastNames[j];
//         fullNames.push(fullName);
//     }
// }
// for (var i = 0; i < fullNames.length; i++){
//     console.log(fullNames[i]);
// }










// var allNumbers = [56,89,40,71,90,10];

// var largestNumber = 0;

// for(var i =0; i < allNumbers.length; i++){
//     //   90          <  10
//     if(largestNumber < allNumbers[i]){
//         largestNumber = allNumbers[i];
//     }
// }
// console.log(largestNumber);


for(var i = 0 ; i <= 100; i++){
    if(i % 2 === 0 ){
        console.log(i + ' is even');
    }else{
        console.log(i + ' is odd');
    }
}
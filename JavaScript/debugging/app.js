console.log('%c Stop!', 'font-weight: bold;color: red; font-size: 5em; text-shadow: 1px 1px black;');
// console.assert(1 === 0, 'Condition did not matched.');

var num1Ref = document.getElementById('num1');
var num2Ref = document.getElementById('num2');
var resultRef = document.getElementById('result');

// function sumtwoinputs() {
//     console.groupCollapsed('Addition');
//     if (num1Ref.value === '' || num2Ref.value === '') {
//         console.group('inside if');
//         console.error('There is a field remain empty.')
//         console.groupEnd();
//     }
//     else {
//         console.group('inside else');
//         console.log('function called.');
//         if (typeof num1Ref.value === 'string' || typeof num2Ref.value === 'string') {
//             console.warn('Form values types are string, converting to numbers.');
//         }
//         var sum = Number(num1Ref.value) + Number(num2Ref.value);
//         console.log(sum);
//         resultRef.innerHTML = num1Ref.value + ' + ' + num2Ref.value + ' = ' + sum;
//         console.groupEnd();
//     }
//     console.groupEnd();
// }



// function findDifference() {
//     console.group('Substraction');
//     if (num1Ref.value === '' || num2Ref.value === '') {
//         console.error('There is a field remain empty.')
//     }
//     else {
//         console.log('function called.');
//         if (typeof num1Ref.value === 'string' || typeof num2Ref.value === 'string') {
//             console.warn('Form values types are string, converting to numbers.');
//         }
//         var sum = Number(num1Ref.value) - Number(num2Ref.value);
//         console.log(sum);
//         resultRef.innerHTML = num1Ref.value + ' - ' + num2Ref.value + ' = ' + sum;
//     }
//     console.groupEnd();
// }












function sumtwoinputs() {
    if (num1Ref.value === '' || num2Ref.value === '') {
        resultRef.innerHTML = 'All fields are requried.'
    }
    else {
        var sum = sumAllParams(num1Ref.value, num2Ref.value);
        resultRef.innerHTML = num1Ref.value + ' + ' + num2Ref.value + ' = ' + sum;
    }
}

function sumAllParams(num1, num2) {
    return num1 + num2;
}

function convertStringToNumbers(strNumb) {
    return Number(strNumb);
}

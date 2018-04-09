// function checkForLastName() {
//     console.log('hello world');
//     var targetNodeEl = document.getElementById('lastNameField');
//     if (targetNodeEl.value.length === 0) {
//         console.log('Last name is required!');
//         targetNodeEl.focus();
//         targetNodeEl.style.backgroundColor = 'yellow';
//         setTimeout(function () {
//             targetNodeEl.style.backgroundColor = 'white';
//         }, 200);
//     }
//     return false;
// }










// function checkForLastName() {
//     console.log('hello world');
//     var targetNodeEl = document.getElementById('lastNameField');
//     if (targetNodeEl.value.length === 0) {
//         console.log('Last name is required!');
//         targetNodeEl.focus();
//         targetNodeEl.style.backgroundColor = 'yellow';
//         var count = 0;
//         var changeFormFieldColor = setInterval(function () {
//             if (count % 2 === 0) {
//                 targetNodeEl.style.backgroundColor = 'yellow';
//             }
//             else {
//                 targetNodeEl.style.backgroundColor = 'white';
//             }
//             count++;
//             if(count === 6){
//                 clearInterval(changeFormFieldColor);
//                 count = 0;
//             }
//         }, 100);
//     }
//     return false;
// }
















function checkForSelection(el) {
    var targetNodeEl = document.getElementById(el);
    console.log(targetNodeEl.selectedIndex);
    if (targetNodeEl.selectedIndex === 0) {
        alert('Select a state.');
    }
    return false;
}



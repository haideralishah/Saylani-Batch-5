/*

onClick
onMouseOver
onMouseOut
onFocus
onBlur



var headingEl = document.getElementById('greet');

headingEl.innerHTML = 'fdasfsda';

*/



// var userName = 'haider'; /* default user name*/













// function greetUser(){


//     // var userName = "ali"; 
//     // console.log(userName);    

// }

// function greetAnotherUser(){
//     var userName = "Haider"; 
//     console.log(userName);


// }




// function getProvidedEl(getProvidedEl) {
//     console.log(getProvidedEl);


//     getProvidedEl.innerHTML = 'Hello Updated Event';
// }

// function expendPara(providedEl) {
//     providedEl.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eius, ipsa voluptates quis officiis deserunt beatae nam numquam, quidem earum saepe possimus iusto accusamus, ut eligendi! Possimus in magni nostrum?';
// }

// function compress(providedEl) {
//     providedEl.innerHTML = 'Hello Events...';
// }



// var longParaFlag = false;
// var longPara = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eius, ipsa voluptates quis officiis deserunt beatae nam numquam, quidem earum saepe possimus iusto accusamus, ut eligendi! Possimus in magni nostrum?';
// var shortPara = 'Hello Events...';
// function expendPara(providedEl) {
//     if(longParaFlag !== true){
//         providedEl.innerHTML = longPara;
//         longParaFlag = true;
//     }
//     else{
//         providedEl.innerHTML = shortPara;
//         longParaFlag = false;
//     }
// }





// function newImage(imageEl, imageSrc) {
//     imageEl.src = imageSrc;
// }



// function oldImage(imageEl, imageSrc) {
//     imageEl.src = imageSrc;

// }







// function changeColor(providedEl) {
//     var colorsArr = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
//     var colorIndex = Math.floor(Math.random() * 6);

//     providedEl.style.color = colorsArr[colorIndex];
// }




function makeFieldGrey(providedEl) {
    providedEl.style.backgroundColor = 'grey';
}

function makeFieldWhite(providedEl) {
    providedEl.style.backgroundColor = 'white';
}




// function validateEmail(formID, passwordId){
//     // console.log(requiredFormField);
//     var formRefrence = document.getElementById(formID);
//     var passwordRef = document.getElementById(passwordId);
//     if(formRefrence.value === '' ||passwordRef.value === '' ){
//         alert('form is empty');
//     }

//     return false;
//     // alert('to block submission.');
// }





// function updateValue(cityID, provienceID) {
//     var cityRef = document.getElementById(cityID);
//     var provienceRef = document.getElementById(provienceID);

//     if(cityRef.value.toLowerCase() === 'hyderabad'){
//         provienceRef.value = 'Sindh'
//     }
//     else{
//         provienceRef.value = 'Panjaab'
//     }
// }








// var listContainer = document.getElementById('container');
// var paraContainer = document.getElementById('para');
// function updateList(){
//     listContainer.innerHTML= '<ol><li>First Task</li><li>second task</li><li>third task</li></ol>';
//     var paraValue = paraContainer.innerHTML;
//     console.log(paraValue);
// }


// function makeInvisible(providedEl) {
//     providedEl.className = 'hidden';
// }

// function assignColor(providedEl) {

//     providedEl.className += ' fontColor';
// }

function getMargin(providedEl) {

    // providedEl.style.margin = '0 auto'

    var myMargin = providedEl.style.margin;
    console.log(myMargin);

    var m = document.getComputedStyle("hello").margin;
    console.log(m);


}



















// function changeBGColor(getProvidedEl, newColor){
//     getProvidedEl.style.backgroundColor = newColor;
// }








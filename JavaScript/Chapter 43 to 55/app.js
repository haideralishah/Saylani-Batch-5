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


// var msgbox = document.getElementById('msgbox');
// var flagFirst = true;
// function showMsg() {
//     if (flagFirst === true) {
//         msgbox.innerHTML = 'Click the box to see the magic';
//         flagFirst = false;
//     }
// }


// function hideMsg() {
//     msgbox.innerHTML = '';
// }

// function changeColor(providedEl) {
//     var colorsArr = ['red', 'blue', 'green'];
//     var backColorsArr = ['yellow', 'orange', 'purple'];
//     var colorIndex = Math.floor(Math.random() * 3);
//     var backColorIndex = Math.floor(Math.random() * 3);

//     providedEl.style.color = colorsArr[colorIndex];
//     providedEl.style.backgroundColor = backColorsArr[backColorIndex];
// }




// function makeFieldGrey(providedEl) {
//     providedEl.style.backgroundColor = 'grey';
// }

// function makeFieldWhite(providedEl) {
//     providedEl.style.backgroundColor = 'white';
// }




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

// function getMargin(providedEl) {

//     // providedEl.style.margin = '0 auto'

//     var myMargin = providedEl.style.margin;
//     console.log(myMargin);

//     // var m = document.getComputedStyle("hello").margin;
//     // console.log(m);


// }



// function makeItProm() {
//     var userInput = prompt('what is your name?');

//     var allPara = document.getElementsByTagName('p');
//     // var allDiv = document.getElementsByTagName('div');
//     // var allH1 = document.getElementsByTagName('h1');
//     // var abcdEl = document.getElementsByTagName('abcd');
//     // var lastParaMargin = allPara[allPara.length - 1].style.margin;

//     allPara[0].innerHTML = 'hello ' + userInput;
//     allPara[1].style.fontFamily = 'monospace';

//     for (var i = 0; i < allPara.length; i++) {
//         allPara[i].style.fontSize = '2em';
//         if (i % 2 === 0) {
//             allPara[i].style.color = 'blue';
//         }
//         else {
//             allPara[i].style.color = 'green';
//         }
//     }
//     // console.log(lastParaMargin);
// }














// make all para color change alternatively
// make all para background color change alternatively
// make div para background font bold

// var divRef = document.getElementById('container');
// var allDivPara= divRef.getElementsByTagName('p');
// console.log(allDivPara);


















// function changeBGColor(getProvidedEl, newColor){
//     getProvidedEl.style.backgroundColor = newColor;
// }






var allImgs = document.getElementsByTagName('img');
var msgBox = document.getElementById('msg');
function guessthecard(imageNumber) {
    var blackHeartIndex = Math.floor(Math.random() * 4)
    console.log(imageNumber, blackHeartIndex);
    if (imageNumber === blackHeartIndex) {
        for (var i = 0; i < allImgs.length; i++) {
            allImgs[i].src = 'images/king.png'
        }
        allImgs[imageNumber].src='images/1.png';
        msgBox.innerHTML = 'You Won!';
    }
    else {
        for (var i = 0; i < allImgs.length; i++) {
            allImgs[i].src = 'images/joker i.jpg'
        }
        allImgs[blackHeartIndex].src='images/1.png';
        msgBox.innerHTML = 'Thaki Thiki Tha';
    }
}


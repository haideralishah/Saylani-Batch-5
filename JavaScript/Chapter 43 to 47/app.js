/*

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




function getProvidedEl(getProvidedEl) {
    console.log(getProvidedEl);


    getProvidedEl.innerHTML = 'Hello Updated Event';
}

function expendPara(providedEl) {
    providedEl.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eius, ipsa voluptates quis officiis deserunt beatae nam numquam, quidem earum saepe possimus iusto accusamus, ut eligendi! Possimus in magni nostrum?';
}

function compress(providedEl) {
    providedEl.innerHTML = 'Hello Events...';
}


function newImage(imageEl, imageSrc) {
    imageEl.src = imageSrc;
}
function oldImage(imageEl, imageSrc) {
    imageEl.src = imageSrc;

}







function changeColor(providedEl) {
    var colorsArr = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    var colorIndex = Math.floor(Math.random() * 6);

    providedEl.style.color = colorsArr[colorIndex];
}
// var h1El = document.getElementById('hello')

// console.log(h1El);
// console.log(h1El.id);
// console.log(h1El.title);
// console.log(h1El.style);
// console.log(h1El.innerHTML);




// var wholeDocument = document.childNodes;
// console.log(wholeDocument);
// var firstChildDom = wholeDocument[1]
// console.log(firstChildDom);
// var htmlChilds = firstChildDom.childNodes
// console.log(htmlChilds);
// var bodyChildDom = htmlChilds[2];
// console.log(bodyChildDom);
// var bodyChildNode =bodyChildDom.childNodes;
// console.log(bodyChildNode);
// var h1Dom = bodyChildNode[1];
// console.log(h1Dom);
// h1Dom.innerHTML = 'Hello JavaScript';































// runs after a specific time 
// keep on running after specific time

var num = 10;
var divEl = document.childNodes[1].childNodes[2].childNodes[3];
function printNumber() {
    if (num > 0) {
        num = num - 1;
        divEl.innerHTML = num;
    }
    else {
        clearInterval(updateDOMInterval);
    }
    console.log('hello');
}
// setTimeout(printNumber, 5000);
var updateDOMInterval = setInterval(printNumber, 500);







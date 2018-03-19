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

// var num = 10;
// var divEl = document.childNodes[1].childNodes[2].childNodes[3];
// function printNumber() {
//     if (num > 0) {
//         num = num - 1;
//         divEl.innerHTML = num;
//     }
//     else {
//         clearInterval(updateDOMInterval);
//     }
//     console.log('hello');
// }
// // setTimeout(printNumber, 5000);
// var updateDOMInterval = setInterval(printNumber, 500);






// Chapter 61 Code

/*
Summary
-------
Junc Arti.
No Line Break
Minify
.nodeType




*/


// var allDocumentChild = document.childNodes[1].childNodes[1];
// console.log(allDocumentChild);













// var targettedNode = document.childNodes[1].childNodes[2];
// console.log(targettedNode);
// console.log(targettedNode.nodeType);









// var d = document.getElementById("humpty");
// console.log(d.childNodes);
// var pCounter = 0;
// for (var i = 0; i < d.childNodes.length; i++) {
//     if (d.childNodes[i].nodeType === 1) {
//         pCounter++;
//     }
//     if (pCounter === 2) {
//         d.childNodes[i].innerHTML = "All his men.";
//         break;
//     }
// }















// Chapter 62 Code
/*
Summary
-------
.parentNode
.firstChild
.lastChild
.nextSibling
.previousSibling

*/



// var humtyEl = document.getElementById('humpty');
// console.log(humtyEl.childNodes)
// var humtyFirstChildEl = humtyEl.firstChild;
// var humtyLastChild = humtyEl.lastChild;

// humtyFirstChildEl.style.color = 'red';
// humtyLastChild.style.color = 'green';

// console.log(humtyFirstChildEl)









// var humtyEl = document.getElementById('humpty');
// console.log(humtyEl.childNodes)
// var humtyFirstChildEl = humtyEl.firstChild.nextSibling;
// var humtyLastChild = humtyEl.lastChild.previousSibling;

// humtyFirstChildEl.style.color = 'red';
// humtyLastChild.style.color = 'green';

// console.log(humtyFirstChildEl)

// var humtyThirdLastChild = humtyEl.lastChild.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling;
// humtyThirdLastChild.style.color = 'blue';

// console.log(humtyEl.parentNode)
// var parentEl = humtyEl.parentNode;
// parentEl.innerHTML = '<em>Data Loss</em>'










// Chapter 63 and 64 Code
/*
Summary
-------
.nodeType
.nodeName
.nodeValue
*/


// var humtyEl = document.getElementById('humpty');
// console.log(humtyEl.childNodes);
// console.log(humtyEl.childNodes[3]);
// console.log(humtyEl.nodeName);
// var nodeNameHumtyEl = humtyEl.nodeName;
// var nodeNameHumtyElValue = humtyEl.childNodes[0].nodeValue;
// console.log(nodeNameHumtyElValue,'*');
// if (nodeNameHumtyEl.toLowerCase() === 'div') {
//     console.log('Div Found');
// }

// var liElements = document.getElementsByTagName("li");
// var howManyLi = liElements.length;

// for (var i = 0; i < howManyLi; i++) {
//     if (liElements[i].innerHTML === "") {
//         liElements[i].innerHTML = "coming soon";
//     }
// }







// var ulEl = document.getElementById("list-container");
// var nodeList = ulEl.childNodes;
// var howManyKids = nodeList.length;
// for (var i = 0; i < howManyKids; i++) {
//     if (nodeList[i].nodeName.toLowerCase() === "li"
//         && nodeList[i].innerHTML === '') {
//         nodeList[i].innerHTML = "coming soon";
//     }
// }



// Chapter 65 Code
/*
Summary
-------
To check if an attribute exist or not.
.hasAttribute('class')
returns boolean;

To check the value of attribute.
.getAttribute('class')
returns Value of Attribute;

To assign an attribute with value.
.setAttribute('title','world')
returns undefined


*/


// var h1El = document.getElementById('hello');
// console.log(h1El.hasAttribute('id'));
// console.log(h1El.hasAttribute('class'));
// console.log(h1El.hasAttribute('href'));
// console.log(h1El.hasAttribute('src'));
// console.log(h1El.hasAttribute('title'));


// var h1El = document.getElementById('hello');
// console.log(h1El.getAttribute('title'));
// console.log(h1El.getAttribute('id'));
// console.log(h1El.getAttribute('class'));


// var h1El = document.getElementById('hello');
// h1El.setAttribute('id','world')
// console.log(h1El.getAttribute('id'))








// Chapter 66
/*
Summary
.nodeType = 1 if node is an element
.nodeType = 2 if node is an attribute
.nodeType = 3 if node is a text

.attribute
.nodeType  // 2 for attributes
.nodeName  // attribute name
.nodeValue // attribute value
*/

// var list = document.getElementById("para").attributes;
// console.log(list[0].nodeType);  
// console.log(list[0].nodeName);  
// console.log(list[0].nodeValue);  











// Chapter 67
/*
Summary
.createElement
.createTextNode
.appendChild

*/

var containerEl = document.getElementById('container');
// function addPara() {
//     var customePara = document.createElement('p');
//     customePara.setAttribute('class', 'big-font');

//     var customeText = document.createTextNode('Hello World');
//     customePara.appendChild(customeText);

//     containerEl.appendChild(customePara)
// }




// var dummyText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, non vero dignissimos earum iure beatae possimus ex qui! Velit ratione harum molestiae fugit expedita dolores quae, qui perspiciatis consectetur reiciendis!';
// function addPara() {

//     var customePara = createCustomeElement('p', dummyText, 'big-font', 'para');

//     console.log(customePara)
//     containerEl.appendChild(customePara)
// }



// function createCustomeElement(elName, text, classNameAttr, idAttr) {
//     var customePara = document.createElement(elName);
//     customePara.setAttribute('class', classNameAttr);
//     customePara.setAttribute('id', idAttr);

//     var customeText = document.createTextNode(text);
//     customePara.appendChild(customeText);
//     // console.log(customePara)
//     return customePara

// }




// Chapter 68
/*
Summary
.insertBefore(newElement, refrence);
.removeChild(targetNode)

*/


var num = 0;
var containerEl = document.getElementById('container');
function addPara() {
    var customePara = document.createElement('p');
    customePara.setAttribute('class', 'big-font');
    customePara.setAttribute('id', 'key' + num++);
    customePara.setAttribute('onClick', 'deleteProvidedEl(this)');

    var customeText = document.createTextNode('Hello World ' + num);
    customePara.appendChild(customeText);

    containerEl.appendChild(customePara)
}
/*
function addParaBefore() {
    var customePara = document.createElement('p');
    customePara.setAttribute('class', 'big-font');
    customePara.setAttribute('onClick', 'delete(this)');
    var customeText = document.createTextNode('Hello World ' + num++);
    customePara.appendChild(customeText);

    var targetNode = containerEl.firstChild;
    containerEl.insertBefore(customePara, targetNode);

}*/
function deleteProvidedEl(providedEl) {
    var parentTarget = providedEl.parentNode;
    parentTarget.removeChild(providedEl);
}




















// var h1 = document.getElementById('hello'); // element refrence
// console.log(h1.innerHTML);


// var h1 = document.getElementsByClassName('hello'); // array of that class


// var h1= document.getElementsByTagName('h1'); // array of that element
// h1[2];







// console.log(document.childNodes[1].childNodes[2].childNodes[5].childNodes[3].childNodes[0].nodeValue);

// // var h1Ref = document.querySelector('h1');
// // var liRef = document.querySelectorAll('.custome-li');
// var userNameRef = document.getElementById('userName');
// var helloLi = document.childNodes[1].childNodes[2].childNodes[5].childNodes[3].childNodes[0].nodeValue

// console.log(helloLi, userNameRef,h1Ref,liRef);
// userNameRef.placeholder = helloLi;
// // userNameRef = helloLi;








// var ulRef = document.getElementById('custome-ul');
// console.log(ulRef.childNodes[3].childNodes[0].nodeValue);





// var nyRef = document.getElementById('ny');
// // console.log(nyRef.childNodes[1].childNodes[1].childNodes[0].nodeValue);
// var secondPara = nyRef.childNodes[3];
// secondPara.innerHTML = 'DOM learning';


// var spanRef = nyRef.childNodes[1].childNodes[1];
// spanRef.innerHTML = 'sparse';

// var spanRefAgain = nyRef.childNodes[1].childNodes[1].childNodes[0];
// spanRefAgain.nodeValue = 'hello sparse';

// console.log(spanRef, spanRefAgain);















// var d = document.getElementById("humpty");

// var pCounter = 0;

// // console.log(d.childNodes.length);

// for (var i = 0; i < d.childNodes.length; i++) {
//     console.log(d.childNodes[i], i);
//     if (d.childNodes[i].nodeType === 1) {
//         pCounter++;
//     }
//     if (pCounter === 2) {
//         d.childNodes[i].innerHTML = "All his men.";
//         break;
//     }
// }





// chapter 62

// var kidNode = document.getElementById("div2");

// console.log(kidNode.parentNode);
// console.log(kidNode.firstChild.childNodes[0].nodeType);
// console.log(kidNode.lastChild);


// kidNode.parentNode.innerHTML = 'hello'



var cityRef = document.getElementById('city');
// console.log(cityRef.nextSibling.nextSibling.innerHTML);
// console.log(cityRef.nextSibling.nextSibling.childNodes[0].nodeValue);
// console.log(cityRef.nextSibling.nextSibling.firstChild.nodeValue);


// console.log(cityRef.previousSibling.previousSibling.innerHTML);
// console.log(cityRef.previousSibling.previousSibling.childNodes[0].nodeValue);
// console.log(cityRef.previousSibling.previousSibling.firstChild.nodeValue);


console.log(cityRef.nextSibling.nextSibling.nodeName);
console.log(cityRef.previousSibling.previousSibling.nodeName);





/*

Child Nodes
Junc Artifacts
Parent Node
FirstChild
LastChild
nextSibling
previousSibling
nodeType // 1 or 3
nodeValue // what is written inside
nodeName // element name

*/
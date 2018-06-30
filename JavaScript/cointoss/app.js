var coinImgRef = document.getElementById('coin-img');
var imagesToPick = document.getElementById('hidden');

var imgFlag;
function showCoin() {
    var randomNumber = Math.ceil(Math.random() * 2);
    if (randomNumber === 1) {
        imgFlag = 1;
        coinImgRef.innerHTML = "<img src='images/bt.jpg' height='200' />";
    }
    else {
        imgFlag = 2;
        coinImgRef.innerHTML = "<img src='images/et.jpg' height='200' />";
    }
}

var count = 0;
function toss() {
    imagesToPick.style.display = 'Block';

    var timeToClare = setInterval(() => {
        if (imgFlag === 1) {
            imgFlag = 2;
            coinImgRef.innerHTML = "<img src='images/et.jpg' height='200' />";
            count = count + 1;
        }
        else {
            imgFlag = 1;
            coinImgRef.innerHTML = "<img src='images/bt.jpg' height='200' />";
            count = count + 1;
        }
        if (count === 50) {
            clearInterval(timeToClare);
            if (imgFlag === pickedImage) {
                console.log('You won')
            }
            else {
                console.log('You loss')
            }
        }
    }, 100);
}


var pickedImage;

function imagePick(imagePickRef, imgRef) {
    imgRef.style.border = "5px dotted green";
    if (imagePickRef === 'bt') {
        pickedImage = 1;
    }
    else {
        pickedImage = 2;
    }
}

// TODO add service worker code here
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
}
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

alert('hello');
if ('serviceWorker' in navigator) {
    console.log('serviceworker is available.');
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(() => {
            console.log('myservice worker registered.');
        })
        .catch((err) => {
            console.log('err', err)
        })
}


function RozaShedule(rozaDay, rozaDate, rozaCount, inTehaiSeher, intehaiIftar) {
    this.rozaDay = rozaDay;
    this.rozaDate = rozaDate;
    this.rozaCount = rozaCount;
    this.inTehaiSeher = inTehaiSeher;
    this.intehaiIftar = intehaiIftar;
}
var roza1 = new RozaShedule('Thu', '17th May', 1, '4:22', '7:11');

function renderToDOM() {
    var customeTDrozaDay = document.createElement('TD');
    var customeText = document.createTextNode(roza1.rozaDay);
    customeTDrozaDay.appendChild(customeText)
}

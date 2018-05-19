function RamadanShedule(rozaCount, rozaDate, rozaDay, intehaiSeher, intehaiIftar) {
    this.rozaCount = rozaCount;
    this.rozaDate = rozaDate;
    this.rozaDay = rozaDay;
    this.intehaiSeher = intehaiSeher;
    this.intehaiIftar = intehaiIftar;
}

var allRozaShedule = [];
var roza1 = new RamadanShedule(1, '17th May, 2018', 'Thu', '04:21 am', '7:11 pm');
var roza2 = new RamadanShedule(2, '18th May, 2018', 'Fri', '04:20 am', '7:11 pm');
var roza3 = new RamadanShedule(3, '19th May, 2018', 'Sat', '04:20 am', '7:12 pm');
var roza4 = new RamadanShedule(4, '20th May, 2018', 'Sun', '04:19 am', '7:12 pm');
var roza5 = new RamadanShedule(5, '21st May, 2018', 'Mon', '04:19 am', '7:13 pm');
var roza6 = new RamadanShedule(6, '22nd May, 2018', 'Tue', '04:18 am', '7:13 pm');
var roza7 = new RamadanShedule(7, '23rd May, 2018', 'Wed', '04:18 am', '7:14 pm');
var roza8 = new RamadanShedule(8, '24th May, 2018', 'Thu', '04:17 am', '7:14 pm');
var roza9 = new RamadanShedule(9, '25th May, 2018', 'Fri', '04:17 am', '7:15 pm');
var roza10 = new RamadanShedule(10, '26th May, 2018', 'Sat', '04:17 am', '7:15 pm');
// console.log(window['roza' + 10]) // roza10

for (var i = 1; i <= 10; i++) {
    // console.log(window['roza' + i])
    allRozaShedule.push(window['roza' + i]);
}


console.log(allRozaShedule);

var tableRef = document.getElementById('ramadan-shedule');



for (var i = 0; i < allRozaShedule.length; i++) {
    var trEl = document.createElement('TR');
    // trEl.setAttribute('id', i);
    trEl.onclick = function (ev) {
        console.log(ev.target.className);
        // console.log(parseInt(ev.target.className) + 1);
        var rozaSheduleClicked = parseInt(ev.target.className);
        alert('Intehai Seher is ' + allRozaShedule[rozaSheduleClicked].intehaiSeher + ' and iftar timings are ' + allRozaShedule[rozaSheduleClicked].intehaiIftar)
    };
    var rozaCountTD = createCustomeTdAndText(allRozaShedule[i].rozaCount);
    // console.log(rozaCountTD)
    rozaCountTD.setAttribute('class', i);

    var rozaDateTD = createCustomeTdAndText(allRozaShedule[i].rozaDate);
    // console.log(rozaDateTD)

    rozaDateTD.setAttribute('class', i);

    var rozaDayTD = createCustomeTdAndText(allRozaShedule[i].rozaDay);
    // console.log(rozaDayTD)

    rozaDayTD.setAttribute('class', i);


    trEl.appendChild(rozaCountTD);
    trEl.appendChild(rozaDateTD);
    trEl.appendChild(rozaDayTD);
    // console.log(trEl);
    // trEl
    tableRef.appendChild(trEl);
}


function createCustomeTdAndText(textElement) {
    var tdEl = document.createElement("TD");
    var textElement = document.createTextNode(textElement);
    tdEl.appendChild(textElement);
    return tdEl;
}



// function showSeherIftarTime() {
//     console.log('hello')
// }


// var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
// var obj = {
//     userName: 'haider'
// }
// var abcd = 'userName'
// console.log(arr[0]);
// console.log(obj[abcd]);

// // for (var key in arr) {
//     console.log(key);
//     console.log(arr[key])
// }
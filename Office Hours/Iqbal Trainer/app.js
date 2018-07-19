

// // var city1 = 'Karachi';
// // var city2 = 'Lahore';
// // var city3 = 'Islamabad';
// // var city4 = 'Peshawar';

// var citeis = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar'];

// var city1 = {
//     cityName: 'Karachi',
//     population: '20M',
//     ghomneKiJaga: ['Do Darya', 'Clifton', 'Mazar Quaid', 'Zoo']
// }
// var city2 = {
//     cityName: 'Lahore',
//     population: '2M',
//     ghomneKiJaga: ["Minar e Pakistan", "Rescross Park", "Zoo"]
// }


// var car = {
//     model: '2005',
//     companyName: 'Cultus',
//     color: 'silver',
//     hybrid: true,
//     ac: true
// }

// // console.log(city2.population);


// console.log(city2.ghomneKiJaga[1]);

























// var student1 = {
//     studentName: 'iqbal',
//     batch: 5,
//     rollNumber: 11508
// }

// function Student(stName,  rNumber) {
//     this.studentName = stName;
//     // this.batch = batch;
//     this.rollNumber = rNumber;
// }
// Student.prototype.programmingLanguage = 'JavaScript';
// Student.prototype.batch = '5';

// var st1 = new Student('iqbal',  11508);
// var st2 = new Student('haider',  2643);
// var st3 = new Student('ali',  2676);
// console.log(st1.programmingLanguage)
// console.log(st2)
// console.log(st3)

















// function Student(stName, rNumber) {
//     this.studentName = stName;
//     // this.batch = batch;
//     this.rollNumber = rNumber;
//     this.greet = 'Hello ' + this.studentName;
//     this.calculate = function (num1, num2) {
//         console.log(num1 - num2);
//     }
// }
// Student.prototype.programmingLanguage = 'JavaScript';
// Student.prototype.batch = '5';

// var st1 = new Student('iqbal', 11508);
// var st2 = new Student('haider', 2643);
// var st3 = new Student('ali', 2676);
// st1.calculate(2, 5)

// console.log(st1.programmingLanguage)
// console.log(st2)
// console.log(st3)







// var citeis = ['Karachi', 'Lahore', 'Islamabad', 'Peshawar'];


// var city1 = {
//     cityName: 'Karachi',
//     population: '20M',
//     ghomneKiJaga: ['Do Darya', 'Clifton', 'Mazar Quaid', 'Zoo']
// }

// // for (var i = 0; i < citeis.length; i++) {
// //     console.log(citeis[i]);
// // }
// for (var key in city1) {
//     // console.log(key);
//     console.log(key + ':' +city1[key]);
// }

// // city1.cityName

// // console.log('batch' in city1);




















// function myPromise() {
//     return new Promise(function (resolve, reject) {
//         console.log('inside promise');
//         var randomeNumber = Math.ceil(Math.random() * 2);
//         setTimeout(() => {
//             if (randomeNumber === 1) {
//                 resolve();
//             }
//             else {
//                 reject();
//             }
//         }, 3000);
//     });
// }

// myPromise()
//     .then(function () {
//         console.log('inside then');
//     })
//     .catch(function () {
//         console.log('inside catch');

//     })

// console.log('haider');









var addRef = document.getElementById('add');

var categoriesRef = document.getElementById('categories');
var imageUploadRef = document.getElementById('image-upload');



function saveAdd() {
    var add = addRef.value;
    console.log(categoriesRef.value)
    var categories = categoriesRef.value
    var file = imageUploadRef.files[0];
    console.log(file);
    var storageRef = firebase.storage().ref('/iqbaltrainer/' + file.name + '/');
    var uploadTask = storageRef.put(file);

    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        console.log('File available at', downloadURL);
        var obj = {
            add: add,
            imgUrl: downloadURL
        }

        firebase.database().ref('/ads/' + categories + '/').push(obj)

    });


    // 



}

function getAddData() {
    var categories = categoriesRef.value

    // firebase.database().ref('/ads/').child(categories)

    firebase.database().ref('/ads/' + categories + '/').once('value', (adsSnapshot) => {
        var adsData = adsSnapshot.val();
        console.log(adsData)
    })

}
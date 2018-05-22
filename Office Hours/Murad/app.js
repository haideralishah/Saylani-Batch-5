var usernameRef = document.getElementById('username');



function myPromise(num) {
    return new Promise((resolve, reject) => {
        var userName;
        if (num % 2 === 0) {
            userName = 'Haider';
        }
        else {
            userName = 'Ali';
        }
        resolve(userName);
    });
}

function runPromise() {
    myPromise(3)
        .then((userName) => {
            usernameRef.innerHTML = userName;
        })
        .catch((err) => {

        })
}
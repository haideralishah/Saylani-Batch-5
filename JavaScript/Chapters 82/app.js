function checkForLastName() {
    console.log('hello world');
    var targetNodeEl = document.getElementById('lastNameField');
    if (targetNodeEl.value.length === 0) {
        console.log('Last name is required!');
        targetNodeEl.focus();
        targetNodeEl.style.backgroundColor = 'yellow';
        setTimeout(function () {
            targetNodeEl.style.backgroundColor = 'white';
        }, 200);
    }
    return false;
}
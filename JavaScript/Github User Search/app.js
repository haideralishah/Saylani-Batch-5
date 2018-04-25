
var searchTimeout;
function searchUserFromGithub(inputRef) {
    // console.log(inputRef.value);
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        searchUserFromAPI(inputRef.value);
    }, 500);
}
function searchUserFromAPI(keyword) {
    console.log('search', keyword);
    fetch(`https://api.github.com/users/${keyword}`)
        .then((response) => {
            return response.json();
        })
        .then((userInfo) => {
            console.log('userInfo: ', userInfo)
        })
}
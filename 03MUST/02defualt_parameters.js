// ES6
function getItems(url, offset = 0, limit = 10, orderBy = "date") {
    return url;
}

const getItemsA = (url, offset = 0, limit = 10, orderBy = "date") => {};

// add(1)
// add(1, 2)
function add(a, b = 0){
    return a + b;
}
//the same as:
const addA = (a, b = 0) => a + b;
//and the same as:
function addB(a, b) {
    b = b === undefined ? 0 : b;
    return a + b;
}
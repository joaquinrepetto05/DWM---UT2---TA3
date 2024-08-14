function removeFromArray(array, item) {
    let index = array.indexOf(item);
    
    if (index !== -1) {
        array.splice(index, 1);
    }
    console.log(array);
}

let testArray = ["1", "2", "3", "4"];
let testItem = "3";
removeFromArray(testArray, testItem);
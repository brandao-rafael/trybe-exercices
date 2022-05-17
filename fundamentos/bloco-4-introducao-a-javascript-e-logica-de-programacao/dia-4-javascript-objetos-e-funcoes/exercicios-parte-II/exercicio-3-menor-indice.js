function lowestIndex(number) {
    let lowIndex = 0;
    for (let i = 0; i < number.length; i++) {
        if (number[i] < number[lowIndex]) {
            lowIndex = i;
        }

    }
    return lowIndex;
}
let testArray = [2, 4, 6, 7, 10, 0, -3];
console.log(lowestIndex(testArray));
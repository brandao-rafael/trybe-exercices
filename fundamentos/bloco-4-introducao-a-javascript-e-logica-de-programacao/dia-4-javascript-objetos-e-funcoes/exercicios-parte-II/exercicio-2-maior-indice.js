function biggestIndex(number) {
    let bigIndex = 0;
    for (let i = 0; i < number.length; i++) {
        if (number[i] > number[bigIndex]) {
            bigIndex = i;
        }

    }
    return bigIndex
}
let testArray = [2, 3, 6, 17, 10, 1];
console.log(biggestIndex(testArray))


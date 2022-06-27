const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

const flatten = (arr) => arr.reduce((acc, curVal) => acc.concat(curVal), [])


console.log(flatten(arrays));
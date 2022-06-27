const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEven = (number) => number % 2 === 0;
const pairSum = (accumulator, number) => accumulator + number;

const sum = (arr) => arr.filter(getEven).reduce(pairSum);

console.log(sum(numbers));

// Without filter

const sumPair = (accumulator, number) => ((number % 2 === 0) ? accumulator + number : accumulator);

const sumNumbers = (arr) => arr.reduce(sumPair, 0);

console.log(sumNumbers(numbers))
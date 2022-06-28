const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 0);

console.log(sum(5, 10, 15));
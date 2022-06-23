// Exercicio 1 SOME
const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((index) => index === name);

// console.log(hasName(names, 'Ana'));

// Exrcicio 2 EVERY
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => arr.every((index) => index.age >= minimumAge);
console.log(verifyAges(people, 18));
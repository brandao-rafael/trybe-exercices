// Exemplo 1
const persons = [
    { firstName: 'Maria', lastName: 'Ferreira' },
    { firstName: 'João', lastName: 'Silva' },
    { firstName: 'Antonio', lastName: 'Cabral' },
];

const fullNames = persons.map((person) => `${person.firstName} ${person.lastName}`);

// console.log(fullNames);

// Exemplo 2
const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

// console.log(negativeNumbers);
// console.log(numbers);

// Exercicio 1
const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const listProducts = products.map((product, i) => {
    const productWithPrice = {};
    productWithPrice.productName = product;
    productWithPrice.price = prices[i];
    return productWithPrice;
});

console.log(listProducts);

// Exemplo 1
const numbers = [1, 2, 3];

const newArray = [...numbers, 4, 5, 6];

// Exemplo 2
const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
// console.log(months);

// Exemplo 3
const imc = (peso, altura) => (peso / (altura * altura)).toFixed(2);
const patientInfo = [85, 1.75];

// console.log(imc(...patientInfo)); // 20.76

// Exemplo 4
const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5

// Exemplo 5
const people = {
    id: 101,
    name: 'Alysson',
    age: 25,
};

const about = {
    address: 'Av. Getúlio Vargas, 1000',
    occupation: 'Developer',
};

const customer = { ...people, ...about };
// console.log(customer);

// Exercicio para fixar
// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Maçã', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado', 'Chocolate', 'Leite em pó'];

const fruitSalad = (fruit, additional) => {
  const finalSalad = [...fruit, ...additional];
  return finalSalad;
};

console.log(fruitSalad(specialFruit, additionalItens));
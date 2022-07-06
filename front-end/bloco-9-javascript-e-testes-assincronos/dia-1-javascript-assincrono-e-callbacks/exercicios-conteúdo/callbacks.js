// // Exemplo 1

// const despesas = [
//     {
//         gym: 99,
//     },
//     {
//         ifood: 200,
//     },
//     {
//         phone: 60,
//     },
//     {
//         internet: 100,
//     },
// ];

// const renda = 1000;

// const despesaMensal = (renda, despesas, callback) => {

//     const despesaTotal = callback(despesas);
//     const saldoFinal = renda - despesaTotal;

//     console.log(`Balanço do mês:
//     Recebido: R$${renda},00
//     Gasto: R$${despesaTotal},00
//     Saldo: R$${saldoFinal},00 `);
// };

// const somaDespesas = (despesas) => {
//     const custoItem = despesas.map((item) => Object.values(item));
//     const despesaTotal = custoItem.reduce((acc, curr) => acc += curr[0], 0);
//     return despesaTotal;
// };
// // despesaMensal(renda, despesas, somaDespesas);

// Exercicio 1 - para fixar

// const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
// const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

// const getUser = (param) => {
//   const userToReturn = {
//     firstName: "Ivan",
//     lastName: "Ivanovich",
//     nationality: "Russian"
//   };
//   return param(userToReturn);
// };

// console.log(getUser(userFullName)); // complete a chamada da função getUser de modo que o retorno seja: "Hello! My name is Ivan Ivanovich"
// console.log(getUser(userNationality)); // complete a chamada da função getUser de modo que o retorno seja: "Ivan is Russian"

// Exercicio 2 - para fixar
const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    console.log(callback(user));
    // Dica: você pode manter o `console.log()`
  }, delay());
};

console.log(getUser(userFullName)) // deve imprimir "Hello! My name is Ivan Ivanovich" depois de um certo tempo
console.log(getUser(userNationality)); // deve imprimir "Ivan is Russian" depois de um certo tempo
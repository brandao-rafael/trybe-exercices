// Exemplo 1
const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];
const [firstCountry, secondCountry, thirdCountry, fourthCountry] = arrayCountries;

// console.log(firstCountry);

// Exercicios para fixar 1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

const [ greeting , performsGreetings] = saudacoes;
//console.log(performsGreetings(greeting));

// const [saudacao, realizaSaudacao] = saudacoes;
// console.log (realizaSaudacao(saudacao));

// console.log(greeting)

// saudacoes[1](saudacoes[0]);

// Exercicios para fixar 2
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[ animal, bebida, comida ] = [ comida, animal, bebida ]
// console.log(comida, animal, bebida);

// Exercicio para fixar 3
let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[,,, ...numerosPares] = numerosPares;
// console.log(numerosPares);
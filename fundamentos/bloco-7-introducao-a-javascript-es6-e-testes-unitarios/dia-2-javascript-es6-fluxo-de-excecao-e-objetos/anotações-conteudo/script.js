// Try /catch
// const verifyIsNumber = (value1, value2) => {
//     if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//         throw new Error('Os valores devem ser numéricos');
//     }
// };

// const sum = (value1, value2) => {
//     try {
//         verifyIsNumber(value1, value2);
//         return value1 + value2;
//     } catch (error) {
//         return error.message;
//     }
// };

// console.log(sum(2, '3'));

// keys
// const customer1 = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
// };

// console.log(customer1);

// customer1.lastName = 'Faria';
// console.log(customer1);

// const customer2 = {
//     firstName: 'Maria',
//     age: 23,
//     job: 'Medic',
// };

// console.log(customer2);
// customer2['lastName'] = 'Silva';
// console.log(customer2);

// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
// };

// customer[newKey] = fullName;
// let newKey = 'lastName';
// newKey = 'fullName';
// const lastName = 'Ferreira';
// const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = lastName;
// console.log(customer);
// EXERCICIO ->
// const customer = {
//     firstName: 'Roberto',
//     age: 22,
//     job: 'Teacher',
// };

// const newKey = 'lastName';
// customer.lastName = 'Faria';
// const fullName = `${customer.firstName} ${customer.lastName}`;

// const addKey = (object, key, value) => {
//     object[key] = value;
//     return object;
// }
// console.log(addKey(customer, newKey, fullName));

// Object.keys ->
// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
// };

// for (const property in coolestTvShow) {
//     console.log(property);
// }

// console.log(Object.keys(coolestTvShow));

// ['name', 'genre', 'createdBy', 'favoriteCharacter', 'quote', 'seasons']

// const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
// };

// const student2 = {
//     Html: 'Bom',
//     Css: 'Ótimo',
//     JavaScript: 'Ruim',
//     SoftSkills: 'Ótimo',
//     Git: 'Bom', // chave adicionada
// };

// const showSkills = (student) => {
//     const arrayOfSkills = Object.keys(student);

//     for (const key in arrayOfSkills) {
//         console.log(`${arrayOfSkills[key]}, Nível: ${student[arrayOfSkills[key]]}`);
//     }
// };

// console.log('Estudante 1');
// showSkills(student1);

// console.log('Estudante 2');
// showSkills(student2);

// Object.values
// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
// };

// for (const property in coolestTvShow) {
//     console.log(coolestTvShow[property]);
// }

// console.log(Object.values(coolestTvShow));

// [
//     'BoJack Horseman',
//     'adult animation',
//     'Raphael Bob-Waksberg',
//     'Princess Carolyn',
//     'Princess Carolyn always lands on her feet.'
//    6
// ]

// const student = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkill: 'Ótimo',
// };

// const listSkillsValuesWithFor = (student) => {
//     const skills = [];
//     for (skill in student) {
//         skills.push(student[skill]);
//     }

//     return skills;
// };

// const listSkillsValuesWithValues = (student) => Object.values(student);

// Sem Object.values
// console.log(listSkillsValuesWithFor(student));

// Com Object.values
// console.log(listSkillsValuesWithValues(student));

// Object.entries

// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
// };

// console.log(Object.entries(coolestTvShow));

// [
//   [ 'name', 'BoJack Horseman' ],
//   [ 'genre', 'adult animation' ],
//   [ 'createdBy', 'Raphael Bob-Waksberg' ],
//   [ 'favoriteCharacter', 'Princess Carolyn' ],
//   [ 'quote', 'Princess Carolyn always lands on her feet.' ],
//   [ 'seasons', 6 ]
// ]

// const países = {
//     França: 'Paris',
//     Brasil: 'Brasília',
//     Espanha: 'Madrid',
//     Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);
// for(index in pairKeyValue) {
//     console.log('--------');
//     console.log('País:', pairKeyValue[index][0]);
//     console.log('Capital:', pairKeyValue[index][1]);
//   };

// Object.assign

// const person = {
//     name: 'Alberto',
//     lastName: 'Gomes',
//     age: 20,
// };

// const info = {
//     age: 23,
//     job: 'engenheiro',
// };

// const family = {
//     children: ['Maria', 'João'],
//     wife: 'Ana',
// };

// Object.assign(person, info, family)
// console.log(person)

// /* Output
//   { name: 'Alberto',
//   lastName: 'Gomes',
//   age: 23,
//   job: 'engenheiro',
//   children: [ 'Maria', 'João' ],
//   wife: 'Ana'
//   } */

// const person = {
//     name: 'Roberto',
// };

// const lastName = {
//     lastName: 'Silva',
// };

// const clone = Object.assign(person, lastName);

// console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
// console.log(person); // { name: 'Roberto', lastName: 'Silva' }
// clone.name = 'Maria';

// console.log('Mudando a propriedade name através do objeto clone')
// console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log('--------------');

// person.lastName = 'Ferreira';

// console.log('Mudando a propriedade lastName através do objeto person');
// console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }

// const person = {
//     name: 'Roberto',
// };

// const lastName = {
//     lastName: 'Silva',
// };

// const newPerson = Object.assign({}, person, lastName);
// newPerson.name = 'Gilberto';
// console.log(newPerson);
// console.log(person);
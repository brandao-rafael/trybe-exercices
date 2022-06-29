// Exemplo 1
const product = {
    name: 'Smart TV Crystal UHD',
    price: '1899.05',
    seller: 'Casas de Minas',
};

// const { name, seller, price } = product;
// console.log(name);
// console.log(seller);
// console.log(price);

// Exemplo 2
const character = {
    name: 'Luke SkyWalker',
    age: '53',
    description: {
        specieName: 'Human',
        jedi: true,
    },
    homeWorld: {
        name: 'Tatooine',
        population: '200000',
    },
};

// const { name, age, homeWorld: { name: planetName }, description: { jedi } } = character;
// console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planetName} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`);

// Exemplo 3

const daysOfWeek = {
    workDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    weekend: ['Saturday', 'Sunday'],
};

// const { workDays, weekend } = daysOfWeek;
// console.log(`Os dias de trabalho são ${workDays}, os fins de semana são ${weekend}`);
// const weekDays = [...workDays, ...weekend];
// console.log(weekDays)

// Exemplo 4
const student = {
    a: 'Maria',
    b: 'Turma B',
    c: 'Matemática'
}

// const { a: name, b: classAssigned, c: subject } = student;
// console.log(`${name}, ${classAssigned}, ${subject} `);

// Exemplo 5
const printProductDetails = ({ name, price, seller }) => {
    console.log(`Promoção! ${name} por apenas ${price} é só aqui: ${seller}`)
};
// printProductDetails(product)

// Exercicio para fixar

const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};

const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

const personFullInfo = {...user, ...jobInfos};
const { name, age, nationality, profession, squad, squadInitials } = personFullInfo;
console.log(`Hi, my name is ${name}, I'm ${age} yo and I'm ${nationality}. I work as ${profession} an my squad is ${squadInitials}-${squad}`);
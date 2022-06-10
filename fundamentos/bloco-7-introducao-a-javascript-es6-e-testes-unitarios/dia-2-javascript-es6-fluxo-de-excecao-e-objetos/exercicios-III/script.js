const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};
// Exercicio 1
const addShift = (lesson, key, value) => lesson[key] = value;
addShift(lesson2, Object.keys(lesson3)[3], lesson3['turno']);
// Exercicio 2
const showKeys = (lesson) => Object.keys(lesson);
// console.log(showKeys(lesson1));
// Exercicio 3
const showLength = (lesson) => Object.keys(lesson).length;
// console.log(showLength(lesson3));
// Exercicio 4
const showValue = (lesson) => Object.values(lesson);
// console.log(showValue(lesson2));
// Exercicio 5
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);
// Exercicio 6
const studentNumbers = () => allLessons.lesson1.numeroEstudantes + allLessons.lesson2.numeroEstudantes + allLessons.lesson3.numeroEstudantes;
// console.log(studentNumbers());

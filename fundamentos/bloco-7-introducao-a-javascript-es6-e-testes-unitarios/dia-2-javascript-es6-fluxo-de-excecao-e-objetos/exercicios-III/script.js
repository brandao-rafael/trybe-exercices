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

const addShift = (lesson, key, value) => { lesson[key] = value; };
addShift(lesson2, Object.keys(lesson3)[3], lesson3['turno']);

const showKeys = (lesson) => Object.keys(lesson);
console.log(showKeys(lesson1));
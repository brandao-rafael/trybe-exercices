const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

const sumGrades = (acc, number) => (acc + number); 

const average = (i) => grades[i].reduce(sumGrades, 0) / grades[i].length;

const studentAverage = (names) => names.map((student, i) => ({name: student, average: average(i),}));

console.log(studentAverage(students))
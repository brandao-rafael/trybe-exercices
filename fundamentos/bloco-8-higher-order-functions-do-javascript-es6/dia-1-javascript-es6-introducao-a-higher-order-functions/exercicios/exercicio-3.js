const checkAnwser = (student, feedback) => student === feedback;

const answer = (student, feedback, callback) => {
    let points = 0;
    for (let i = 0; i < student.length; i += 1) {
        callback(student[i], feedback[i]) ? points +=1 : points -= 0.5; 
        (student[i] === 'N.A') ? points += 0.5 : null;
        console.log(points);
    }
    return points;
};
const right = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const student = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(answer(student, right, checkAnwser));
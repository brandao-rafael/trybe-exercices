let number = [];

for (let i = 1; i < 26; i +=1){
    number.push(i);
}
console.log(number);

let divNumber = [];

for (let j = 0; j < number.length; j +=1){
    divNumber.push(number[j] /2);
}
console.log(divNumber)
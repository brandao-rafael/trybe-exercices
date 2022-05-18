let number = 5;
let quadrado = '';
for (let i = 1; i <= number; i += 1){ 
    let temp = '';
    for (let j = 1; j <= number; j += 1) {
        temp += "*"
    }
    quadrado += '\n' + temp;
}
console.log(quadrado);

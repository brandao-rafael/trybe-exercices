let number = 5;
let quadrado = '';
for (let i = 1; i <= number; i += 1){ 
    for (let j = 1; j <= number; j += 1) {
        if (j === i) {
            quadrado += '*';
        }
    }
    console.log(quadrado);
}

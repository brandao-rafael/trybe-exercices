let number = 5;
let triangulo = '';
for (let i = 1; i <= number; i += 1){ 
    for (let j = 1; j <= number; j += 1) {
        if (j === i) {
            triangulo += '*';
        }
    }
    console.log(triangulo);
}

let number = 5;
for (let i = 0; i < number; i += 1){ 
    let triangulo = ''; 
    for (let j = 1; j < number - i; j += 1) {
        triangulo += ' ';
    }
    for (let j = 0; j < i + 1; j += 1){
        triangulo += '*';
    }
    console.log(triangulo);
}

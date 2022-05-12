let nota = 40;



if (nota > 100 || nota < 0){
    console.log('ERRO, valor invalido')
} else if(nota >= 90 && nota <= 100){
    console.log('A');
} else if (nota >= 80){
    console.log('B');
} else if (nota >= 70){
    console.log('C');
} else if (nota >= 60){
    console.log('D');
} else if (nota >= 50){
    console.log('E');
} else {
    console.log('F');
}
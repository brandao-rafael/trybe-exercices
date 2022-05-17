//exercicio - 1
function soma (a, b){
    return a + b;
}
console.log(soma(9,5));
function subtração (a, b){
    return a - b;
}
console.log(subtração(9,5));
function multiplicacao (a, b){
    return a * b;
}
console.log(multiplicacao(9,5));
function divisao (a, b){
    return a / b;
}
console.log(divisao(15,5));
function modulo (a, b){
    return a % b;
}
console.log(modulo(20,3));

//Exercicio 2 
function maiorNumero(n1, n2){
    if (n1 > n2){
        return 'O maior numero é ' + n1;
    } else {
        return 'O maior numero é ' + n2;
    }
}
console.log(maiorNumero(26, 25));

//Exercicio 3
function maiorDeTres (n1, n2, n3){
    if (n1 > n2 && n1 > n3){
        return "O maior numero é: " + n1
    } else if (n2 > n1 &&  n2 > n3){
        return "O maior numero é: " + n2
    } else {
        return "O maior numero é: " + n3
    }
}
console.log(maiorDeTres(31, 25, 30))

//Exercicio 4

function positivoNegativo (n){
    if (n < 0){
        return "negative"
    } else if (n === 0){
        return "zero"
    } else {
        return "positive"
    }
}
console.log(positivoNegativo(0));

function ehTriangulo (a1, a2, a3){
    if (a1 + a2 + a3 === 180){
        return true;
    } else if (a1 < 0 || a2 < 0 || a3 < 0){
        return "angulo invalido";
    } else {
        return false;
    }
}
console.log(ehTriangulo(60, 60, -50));
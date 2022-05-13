let salarioBruto = 5000;
let inss = null;
let salarioBase = null;
let salarioLiquido = null;

if (salarioBruto <= 1556.94){
    inss = ((salarioBruto / 100)* 8);
    salarioBase = salarioBruto - inss;
} else if (salarioBruto <= 2594.92){
    inss = ((salarioBruto / 100)* 9);
    salarioBase = salarioBruto - inss;
} else if (salarioBruto <= 5189.82){
    inss = ((salarioBruto / 100)* 11);
    salarioBase = salarioBruto - inss;
} else {
    inss = salarioBruto - 570.88;
    salarioBase = salarioBruto - inss;
}

if (salarioBase <= 1903.98){
    salarioLiquido = salarioBase
} else if (salarioBase <= 2826.65){
    salarioLiquido = salarioBase - (((salarioBase / 100)* 7.5) - 142.80);
    console.log(salarioLiquido)
} else if (salarioBase <= 3751.05){
    salarioLiquido = salarioBase - (((salarioBase / 100)* 15) - 354.80);
    console.log(salarioLiquido)
} else if (salarioBase <= 4664.68){
    salarioLiquido = salarioBase - (((salarioBase / 100)* 22.5) - 636.13);
    console.log(salarioLiquido)
} else {
    salarioLiquido = salarioBase - (((salarioBase / 100)* 27.5) - 869.36);
    console.log(salarioLiquido)
}

console.log(salarioBase)
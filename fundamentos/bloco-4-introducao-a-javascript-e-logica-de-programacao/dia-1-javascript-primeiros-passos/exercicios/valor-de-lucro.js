let custoInicial = 20;
let valorVenda = 50;
let custoTotal = null;
let lucro = null;

custoTotal = ((custoInicial / 100) * 20) + custoInicial;
lucro = valorVenda - custoTotal

if (custoInicial <= 0 || valorVenda <= 0){
    console.log("insira um valor valido")
} else {
    console.log(lucro * 1000);
}
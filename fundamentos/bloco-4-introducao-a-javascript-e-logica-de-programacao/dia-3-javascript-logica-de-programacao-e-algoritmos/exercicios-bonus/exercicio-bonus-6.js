let number = 11;
let contador = 0;

for (let i = 0; i <= number; i +=1){
    if (number % i === 0){
        contador += 1;
    }
    
}
if (contador === 2 ){
    console.log("numero primo");
} else {
    console.log("numero não é primo");
}
let primos = new Array();
for (let j = 1; j <=50; j++ ){
  let contador = 0
  for ( let i = 1; i <= j; i++){
    if (j%i==0){
      contador ++;
    }

  }
  if (contador == 2){
    primos.push(j)
  }
}
console.log(primos)
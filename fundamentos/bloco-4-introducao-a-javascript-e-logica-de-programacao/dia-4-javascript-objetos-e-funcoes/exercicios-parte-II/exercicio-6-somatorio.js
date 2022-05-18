function sumNumber (num){
    let sum = 0;
    for (let i = num; i > 0; i -=1){
        sum += i;
    }
    return sum
}
console.log(sumNumber(4));
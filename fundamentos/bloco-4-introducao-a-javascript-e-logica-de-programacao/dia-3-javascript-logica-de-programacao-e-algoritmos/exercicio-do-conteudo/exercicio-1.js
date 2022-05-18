let fruits = [3, 4, 10, 1, 12];
let sumFruits = 0;
for (let i = 0; i < fruits.length; i += 1){
    sumFruits += fruits[i]  
}
if (sumFruits >= 16){
    console.log(sumFruits)
} else {
    console.log('valor menor que 16');
}

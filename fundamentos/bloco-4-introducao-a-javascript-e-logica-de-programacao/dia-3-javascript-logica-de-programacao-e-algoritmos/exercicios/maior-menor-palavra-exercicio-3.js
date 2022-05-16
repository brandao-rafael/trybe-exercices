let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';
for (let i = 0; i < array.length; i += 1){
    if (array[i].length > array[i+1].length){
        maior += array[i].length
    }
}
console.log(maior)
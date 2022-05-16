let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';
let menor = '';
for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
        if (array[i].length > array[j].length) {
            maior = array[i];
        } else {
            menor = array[j]
        }
        console.log(array[i], array[j])
    }
}
console.log(maior, menor)
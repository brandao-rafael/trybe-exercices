let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = '';
let menor = array[0];
for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > maior.length){
        maior=array[i];
        console.log('if')
    }; 
    if (array[i].length < menor.length){
        menor=array[i];
        console.log('else');
    }
    
}
console.log('maior: '+ maior);
    console.log('menor: ' + menor); 
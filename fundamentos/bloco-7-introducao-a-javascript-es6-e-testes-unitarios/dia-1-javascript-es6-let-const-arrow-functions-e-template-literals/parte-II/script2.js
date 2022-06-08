// exercicio 1
const fatorial = (n) => n === 0 || n === 1 ? 1 : n * fatorial(n - 1);

console.log(fatorial(4));

// exercicio 2
const logestWord = (string) => {
    let logest = '';
    string.split(' ').sort(function (a, b) { b.length > a.length ? logest = b : logest = a });
    return logest;
}
console.log(logestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// exercicio 4
const changeX = (name) => {
    let string = 'Tryber x aqui!';
    let newString = string.replace('x', name);
    return newString;
}
const skills = ['javascript', 'html', 'css', 'python', 'github'];

const textGenerator = () => {
    let name = changeX('Rafael');
    let text = `${name} 
    Minhas cinco principais habilidades são:
    ${skills[0]}
    ${skills[1]}
    ${skills[2]}
    ${skills[3]}
    ${skills[4]}`;
    return text;
}
console.log(textGenerator());
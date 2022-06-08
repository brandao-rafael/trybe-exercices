// exercicio 1
const fatorial = (n) => n === 0 || n === 1 ? 1 : n * fatorial(n-1);

console.log(fatorial(4));

// exercicio 2
const logestWord = (string) => {
    let logest = '';
    string.split(' ').sort(function (a, b) {b.length > a.length ? logest = b : logest = a});
    return logest;
}
console.log(logestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

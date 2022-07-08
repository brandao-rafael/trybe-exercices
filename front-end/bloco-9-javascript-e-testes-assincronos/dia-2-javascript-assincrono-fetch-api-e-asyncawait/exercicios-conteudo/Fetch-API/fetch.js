const fetch = require('node-fetch');

// Exemplo 1
const fetchJoke = () => {
    const url = 'https://api.chucknorris.io/jokes/random?category=dev';

    fetch(url)
        .then((response) => response.json())
        .then((data) => console.log(data.value))
        .catch((error) => console.log(`Algo deu errado :( \n${error}`));
}

fetchJoke();

const getRandomAdvice = () => {
    const url = 'https://api.adviceslip.com/advice';
    const request = fetch(url)
        .then((response) => response.json())
        .then(({ slip: { id, advice } }) => console.log(advice))
        .catch((error) => console.log('Ops deu algo errado, Erro:', error.errno));
};

getRandomAdvice();
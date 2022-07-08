const url = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };

    fetch(url, myObject)
        .then(response => response.json())
        .then(data => {
            const joke = data.joke;
            document.getElementById('jokeContainer').innerText = joke;
        });
};

window.onload = () => fetchJoke();
const unList = document.getElementById('unList');

const createElement = (coin) => {
    const li = document.createElement('li');
    li.innerText = `${coin.id} ${coin.symbol}: U$d: ${parseFloat(coin.priceUsd).toFixed(2)}`;
    unList.appendChild(li);
}

const fetchCripto = () => {
    const url = 'https://api.coincap.io/v2/assets';
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };

    fetch(url, myObject)
        .then((response) => response.json())
        .then((data) => {
            data.data.filter((cripto) => cripto.rank <= 10)
            .forEach((coin) => createElement(coin));
        })
}

window.onload = fetchCripto;
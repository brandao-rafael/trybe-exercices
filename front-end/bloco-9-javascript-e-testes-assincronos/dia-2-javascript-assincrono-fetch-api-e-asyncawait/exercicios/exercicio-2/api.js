const ul = document.getElementById('unList');
const modalUl = document.getElementById('modalUl')
const criptoValue = [];
const createElement = (coin, currency) => {
    const li = document.createElement('li');
    if (currency === 'usd') {
        li.innerText = `${coin.id} ${coin.symbol}: ${parseFloat(coin.priceUsd).toFixed(2)}`;
        ul.appendChild(li);
    } else {
        li.innerText = `${coin.id} ${coin.symbol}: ${parseFloat(coin.priceUsd * currency).toFixed(2)}`;
        modalUl.appendChild(li);
    }
    
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
            .forEach((coin) => {
                criptoValue.push(coin);
                createElement(coin, 'usd')
            });
        }).catch((error) => console.log(error));
}

let modal = document.getElementById('myModal');

const fetchCriptoBrl = () => {
    const urlBrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';
    const fConfig = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };

    fetch(urlBrl, fConfig)
        .then((response) => response.json())
        .then((value) => {
            modal.style.display = "block";
            const { brl } = value.usd;
            criptoValue.forEach((coin) => createElement(coin, brl));
        }).catch((error) => console.log(error));
}
const btn = document.getElementById('btn');
btn.addEventListener('click', fetchCriptoBrl);
let span = document.getElementsByClassName('close')[0];
span.onclick = () => {
    modal.style.display = 'none';
    modalUl.innerHTML = '';
}


window.onload = fetchCripto;
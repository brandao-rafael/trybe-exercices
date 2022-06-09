const btn = document.getElementById('btn');
const pElement = document.getElementById('pElement');
btn.addEventListener('click', () => {
    let counter = parseInt(pElement.innerText);
    counter += 1;
    pElement.innerText = counter;
})
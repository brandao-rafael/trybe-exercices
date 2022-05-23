const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre? R: Ocorre pois ela esta com transform no css.
window.onload = function () {
    firstLi.classList.remove('tech');
};
// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function adcClass(param) {
    param.classList.add('tech');
}
firstLi.addEventListener('click', function(){
    adcClass(firstLi);
    secondLi.classList.remove('tech');
    thirdLi.classList.remove('tech');
});
secondLi.addEventListener('click',  function(){
    adcClass(secondLi);
    firstLi.classList.remove('tech');
    thirdLi.classList.remove('tech');
});
thirdLi.addEventListener('click',  function(){
    adcClass(thirdLi);
    firstLi.classList.remove('tech');
    secondLi.classList.remove('tech');
});
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function changeText(param){
    const techClass = document.querySelector('.tech');
    techClass.innerText = param.target.value;
}
input.addEventListener('keyup', changeText)

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portfólio?
function redirect (){
    window.location.replace('https://brandao-rafael.github.io')
}
myWebpage.addEventListener('dblclick', redirect)
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function changeColor(param) {
    param.target.style.color = "red";
}
myWebpage.addEventListener('mouseover', changeColor);

function changeOutColor(param) {
    param.target.style.color = "unset";
}
myWebpage.addEventListener('mouseout', changeOutColor);
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
    // O Event é passado como um parâmetro para a função.
    event.target.innerText = 'Opção reiniciada';
    // O event possui várias propriedades, porém a mais usada é o event.target,
    // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
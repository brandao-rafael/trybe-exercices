//exercicio 1
const elementYou = document.getElementById('elementoOndeVoceEsta').parentElement;
const sonOfSon = document.getElementById('elementoOndeVoceEsta').firstElementChild;
const sonOfFather = document.getElementById('pai').firstElementChild;
const sonOfFatherYou = document.getElementById('elementoOndeVoceEsta').previousElementSibling;
const third = document.getElementById('elementoOndeVoceEsta').nextElementSibling;
const thirdFather = document.getElementById('pai').lastElementChild.previousElementSibling;

elementYou.style.color = "blue";
sonOfSon.innerText = "lorem ipsum";
sonOfFather.innerText = "filho do pai";
sonOfFatherYou.style.color = "red"; 
console.log(third);
thirdFather.innerText = "terceiro filho";

//exercicio 2
let brotherElement = document.createElement('section');
brotherElement.innerText = 'elemento irmão'; //Criando elemento irmão
elementYou.appendChild(brotherElement);

let elementIAm = document.getElementById('elementoOndeVoceEsta');
let mySon = document.createElement('section');
mySon.innerText = 'elemento meu filho';
elementIAm.appendChild(mySon);

let grandSon = document.createElement('section');
grandSon.innerText = 'elemento meu neto';
sonOfSon.appendChild(grandSon);

console.log(grandSon.parentElement.lastElementChild.previousElementSibling);


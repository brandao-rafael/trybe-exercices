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
 

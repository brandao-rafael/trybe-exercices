function changeBackgroundColor(){
    const cabecalho = document.querySelector('header');
    const urgente = document.querySelectorAll(".emergency-tasks h3");
    const urgenteDiv = document.getElementsByClassName("emergency-tasks");
    const naoUrgente = document.querySelectorAll(".no-emergency-tasks h3");
    const naoUrgenteDiv = document.getElementsByClassName("no-emergency-tasks");
    const rodape = document.getElementById("footer-container");

    cabecalho.style.backgroundColor = "rgb(0,176,105)";
    rodape.style.backgroundColor = "rgb(0,53,51)"
    naoUrgente[1].style.backgroundColor = "black";
    for (let i = 0; i < 5 ; i++) {
        urgente[i].style.backgroundColor = "rgb(165,0,243)";
        urgenteDiv[i].style.backgroundColor =  "rgb(255,159,132)";
        naoUrgente[i].style.backgroundColor = "black";  
        naoUrgenteDiv[i].style.backgroundColor = "rgb(249,219,94)"   
    }
}
changeBackgroundColor();
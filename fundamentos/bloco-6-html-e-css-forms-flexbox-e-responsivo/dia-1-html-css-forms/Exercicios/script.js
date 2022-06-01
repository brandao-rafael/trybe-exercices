const button = document.getElementById('submitButton');
const checkBox = document.getElementById('iAgree');

function check(e){
    if (checkBox.checked == false) {
        alert('Por favor, autorize a ultilização das imagens para concorrer');
        e.preventDefault();
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    }
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
}
function control() {
    button.addEventListener('click', check);
}
control();
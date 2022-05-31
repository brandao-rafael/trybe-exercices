const button = document.getElementById('submitButton');
button.addEventListener('click', prevent);

function prevent(e){
    e.preventDefault()
}
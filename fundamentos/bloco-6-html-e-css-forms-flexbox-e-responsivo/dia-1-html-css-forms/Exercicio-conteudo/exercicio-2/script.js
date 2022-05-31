// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function prevent(e) {
    e.preventDefault();
}

function preventKey(event) {
    let keypress = event.key;
    if (keypress == "a" || keypress == "A"){
        console.log(keypress);
    } else {
        event.preventDefault();
    }
}

HREF_LINK.addEventListener('click', prevent);
INPUT_CHECKBOX.addEventListener('click', prevent);
INPUT_TEXT.addEventListener('keydown', preventKey);
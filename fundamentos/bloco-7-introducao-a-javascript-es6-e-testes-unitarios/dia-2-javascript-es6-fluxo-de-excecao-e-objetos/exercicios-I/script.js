function sum() {
    try {
        document.getElementById('result').innerHTML = `Resultado: ${treatment()}`;
    } catch (error) {
        document.getElementById('result').innerHTML = error.message;
    } finally {
        document.getElementById('value1').value = '';
        document.getElementById('value2').value = '';
    }
}

const treatment = () => {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const result = parseInt(value1) + parseInt(value2);
    if (isNaN(result)){
        throw new Error('Por favor insira um valor válido');
    } else {
        return result;
    }
}

window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
}
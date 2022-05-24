window.onload = function(){
    const inputBackground = document.getElementById('inputBackground');
    const btnBackground = document.getElementById('btnBackground');
    const inputColor = document.getElementById('inputColor');
    const btnColor = document.getElementById('btnColor');
    const inputFontSize = document.getElementById('inputFontSize');
    const btnFontSize = document.getElementById('btnFontSize');
    const inputLineHeigth = document.getElementById('inputLineHeigth');
    const btnLineHeigth = document.getElementById('btnLineHeigth');
    const inputFontFamily = document.getElementById('inputFontFamily');
    const btnFontFamily = document.getElementById('btnFontFamily');

    const body = document.querySelector('body');

    btnBackground.addEventListener('click', function(){
        body.style.backgroundColor = inputBackground.value;
    });
    btnColor.addEventListener('click', function (){
        body.style.color = inputColor.value;
    });
    btnFontSize.addEventListener('click', function(){
        body.style.fontSize = inputFontSize.value + 'px';
    });
    btnLineHeigth.addEventListener('click', function(){
        body.style.lineHeight = inputLineHeigth.value + 'px';
    });
    btnFontFamily.addEventListener('click', function(){
        body.style.fontFamily = inputFontFamily.value;
    });


    


}
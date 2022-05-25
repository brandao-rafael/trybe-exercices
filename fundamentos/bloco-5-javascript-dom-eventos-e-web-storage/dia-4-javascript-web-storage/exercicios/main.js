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
    
    body.style.backgroundColor = localStorage.getItem('background');
    body.style.color = localStorage.getItem('color');
    body.style.fontSize = localStorage.getItem('FontSize') + 'px';
    body.style.lineHeight = localStorage.getItem('lineHeigth') + 'px';
    body.style.fontFamily = localStorage.getItem('fontFamily');

    btnBackground.addEventListener('click', function(){
        body.style.backgroundColor = inputBackground.value;
        localStorage.setItem("background", inputBackground.value);
    });
    btnColor.addEventListener('click', function (){
        body.style.color = inputColor.value;
        localStorage.setItem("color", inputColor.value);
    });
    btnFontSize.addEventListener('click', function(){
        body.style.fontSize = inputFontSize.value + 'px';
        localStorage.setItem("fontSize", inputFontSize.value);
    });
    btnLineHeigth.addEventListener('click', function(){
        body.style.lineHeight = inputLineHeigth.value + 'px';
        localStorage.setItem("lineHeigth", inputLineHeigth.value);
    });
    btnFontFamily.addEventListener('click', function(){
        body.style.fontFamily = inputFontFamily.value;
        localStorage.setItem("FontFamily", inputFontFamily.value);
    });


    


}
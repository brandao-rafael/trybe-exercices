function createElements(){
    const sectionStyle = document.getElementById('sectionStyle');
    const backgroundButton = document.createElement('button');
    const backgroundInput = document.createElement('input');
    const colorTextButton = document.createElement('button');
    const colorTextInput = document.createElement('input');
    const fontSizeButton = document.createElement('button');
    const fontSizeInput = document.createElement('input');
    const lineHeigthButton = document.createElement('button');
    const lineHeigthInput = document.createElement('input');
    const fontFamilyButton = document.createElement('button');
    const fontFamilyInput = document.createElement('input');
    
    backgroundButton.setAttribute('id', 'backgroundBtn');
    colorTextButton.setAttribute('id', 'colorTextBtn');
    fontSizeButton.setAttribute('id', 'fontSizeBtn');
    lineHeigthButton.setAttribute('id', 'lineHeigthBtn');
    fontFamilyButton.setAttribute('id', 'fontFamilyBtn');
    backgroundInput.setAttribute('id', 'backgroundImput');
    colorTextInput.setAttribute('id', 'colorTextImput');
    fontSizeInput.setAttribute('id', 'fontSizeImput');
    lineHeigthInput.setAttribute('id', 'lineHeigthImput');
    fontFamilyInput.setAttribute('id', 'fontFamilyImput');

    backgroundButton.innerText = 'Background Color';
    colorTextButton.innerText = 'Text Color';
    fontSizeButton.innerText = 'Font Size';
    lineHeigthButton.innerText = 'Line Heigth';
    fontFamilyButton.innerText = 'Font Family'
    backgroundButton.setAttribute('class', 'btn');
    colorTextButton.setAttribute('class', 'btn');
    fontSizeButton.setAttribute('class', 'btn');
    lineHeigthButton.setAttribute('class', 'btn');
    fontFamilyButton.setAttribute('class', 'btn');
    
    sectionStyle.appendChild(backgroundInput);
    sectionStyle.appendChild(backgroundButton);
    sectionStyle.appendChild(colorTextInput);
    sectionStyle.appendChild(colorTextButton);
    sectionStyle.appendChild(fontSizeInput);
    sectionStyle.appendChild(fontSizeButton);
    sectionStyle.appendChild(lineHeigthInput);
    sectionStyle.appendChild(lineHeigthButton);
    sectionStyle.appendChild(fontFamilyInput);
    sectionStyle.appendChild(fontFamilyButton);
}
createElements();

function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');

    for (let index = 0; index < weekDays.length; index += 1) {
        const days = weekDays[index];
        const dayListItem = document.createElement('li');
        dayListItem.innerHTML = days;

        weekDaysList.appendChild(dayListItem);
    };
};

createDaysOfTheWeek();

  // Escreva seu código abaixo.
function createDays(){
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const days =document.getElementById('days');
    for (let i = 0; i < dezDaysList.length; i += 1) {
        newLI = document.createElement('li');
        newLI.className = "day";
        newLI.innerText = dezDaysList[i];
        days.appendChild(newLI);
        if (dezDaysList[i] == '4' ||dezDaysList[i] == '11' || dezDaysList[i] == '18' || dezDaysList[i] == '25'){
            newLI.className += ' friday';
        }
        if (dezDaysList[i] == '24' ||dezDaysList[i] == '25' || dezDaysList[i] == '31'){
            newLI.classList.add('holiday')
        }
    }
}
createDays();

function adcButton (param){
    const buttonContainer = document.querySelector('.buttons-container');
    holidayButton = document.createElement('button');
    holidayButton.innerText = param;
    holidayButton.setAttribute('id', 'btn-holiday');
    buttonContainer.appendChild(holidayButton)
}
adcButton('Feriados');

function buttonEvent (){
    const holidayBtn = document.querySelector('#btn-holiday');
    const holidays = document.querySelectorAll('.holiday');
    let originColor = 'rgb(119, 119, 119)';
    let red = "red";
    
    holidayBtn.addEventListener('click', function () {
        for (let i = 0; i < holidays.length; i += 1) {
            if (holidays[i].style.color === red){
                holidays[i].style.color = originColor;
            } else {
                holidays[i].style.color = red;
            }
            
        }
    });
}
buttonEvent();

function adcFridayButton (param){
    const buttonContainer = document.querySelector('.buttons-container');
    fridayButton = document.createElement('button');
    fridayButton.innerText = param;
    fridayButton.setAttribute('id', 'btn-friday');
    buttonContainer.appendChild(fridayButton)
}
adcFridayButton('Sexta-feira');

function buttonFridayEvent (){
    const fridayBtn = document.querySelector('#btn-friday');
    const fridays = document.querySelectorAll('.friday');
    let originText = [4, 11, 18, 25];
    let newText = "Sextou";
    
   fridayBtn.addEventListener('click', function () {
        for (let i = 0; i < fridays.length; i += 1) {
            if (fridays[i].innerHTML !== newText){
                fridays[i].innerHTML = newText;
                fridays[i].style.color = "blue";
            } else {
                fridays[i].innerHTML = originText[i];
                fridays[i].style.color = 'rgb(119, 119, 119)';
            }
            
        }
    });
}
buttonFridayEvent();
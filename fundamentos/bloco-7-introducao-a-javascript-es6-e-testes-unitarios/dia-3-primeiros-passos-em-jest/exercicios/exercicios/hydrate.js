function hydrate(param) {
    let regex = /\d+/g;
    let numbersArray = param.match(regex);
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i += 1) {
        numbertemp = parseInt(numbersArray[i]);
        sum += numbertemp;
    }
    if (sum === 1) {
        return `${sum} copo de água`;
    }
    return `${sum} copos de água`;
}

module.exports = hydrate;
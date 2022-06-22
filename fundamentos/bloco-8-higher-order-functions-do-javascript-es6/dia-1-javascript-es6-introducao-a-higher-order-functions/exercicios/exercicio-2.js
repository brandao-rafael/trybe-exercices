const checkResult = (number, result) => number === result;

const generateGame = (number, callback) => {
    let result = Math.floor(Math.random() * 5) + 1;
    console.log(result);
    callback(number, result);
    return callback(number, result) ? 'Parabéns você ganhou' : 'tente novamente';
};

console.log(generateGame(4, checkResult));
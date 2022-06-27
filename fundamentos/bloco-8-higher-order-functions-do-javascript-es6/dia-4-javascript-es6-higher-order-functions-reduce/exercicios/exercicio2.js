const {books} = require('./books');

const reduceNames = books.reduce((acc , curr, i, arr) => (i === arr.length -1 ) ? `${acc} ${curr.author.name}.` : `${acc + curr.author.name}, `, '');

console.log(reduceNames);
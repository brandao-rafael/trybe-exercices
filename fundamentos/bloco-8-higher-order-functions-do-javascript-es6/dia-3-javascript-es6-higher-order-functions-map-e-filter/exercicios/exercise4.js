const books = require('./books');

const books60yo = books.filter((book) => book.releaseYear < 1962);

const orderPerAge = books60yo.sort((a, b) => a.releaseYear - b.releaseYear);

console.log(orderPerAge);
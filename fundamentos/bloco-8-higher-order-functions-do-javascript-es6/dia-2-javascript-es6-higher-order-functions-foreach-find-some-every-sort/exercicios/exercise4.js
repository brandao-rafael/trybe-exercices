const books = require('./books');

const orderPerRelease = books.sort((a, b) => b.releaseYear - a.releaseYear);

console.log(orderPerRelease)
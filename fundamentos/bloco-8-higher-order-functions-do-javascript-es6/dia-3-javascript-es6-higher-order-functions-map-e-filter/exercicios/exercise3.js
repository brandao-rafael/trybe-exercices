const books = require('./books.js');

const fantasyAndSciFi = () => books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

console.log(fantasyAndSciFi());
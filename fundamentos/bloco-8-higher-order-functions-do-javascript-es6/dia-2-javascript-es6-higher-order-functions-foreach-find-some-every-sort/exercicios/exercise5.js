const books = require('./books');

const everyoneWasBornOnSecXX = books.every((book) => book.author.birthYear < 1999 && book.author.birthYear > 1900);

console.log(everyoneWasBornOnSecXX)
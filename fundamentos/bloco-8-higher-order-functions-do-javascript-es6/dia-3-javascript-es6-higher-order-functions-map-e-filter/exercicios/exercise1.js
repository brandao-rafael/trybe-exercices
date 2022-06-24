const books = require('./books');

const basicInfo = books.map((book) => `${book.name} ${book.genre} ${book.author.name}`);

console.log(basicInfo);
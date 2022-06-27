const books = require('./books');

const books60yoName = books.filter((book) => (book.releaseYear < 1962)).map((book) => book.name);

console.log(books60yoName);
const books = require('./books');

const nameWithAbbreviation = books.find((book) => (book.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3)).name;

console.log(nameWithAbbreviation);
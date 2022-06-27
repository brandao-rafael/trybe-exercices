const books = require('./books');

const sciFiandfantasyAuthorName = books.filter((book) => (book.genre === 'Ficção Científica' || book.genre === 'Fantasia')).map((name) => name.author.name).sort();

console.log(sciFiandfantasyAuthorName)
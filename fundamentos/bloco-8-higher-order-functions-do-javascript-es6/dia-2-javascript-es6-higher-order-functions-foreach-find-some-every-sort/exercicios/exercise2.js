const books = require('./books');

function smallerName() {
    let nameBook;
    books.forEach((book) => !nameBook || book.name.length < nameBook.length ? nameBook = book.name : null);
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
}

console.log(smallerName())
const books = require('./books');

const authorUnique = () => {
    return books.every((book) => !books.some((someBook) => (someBook.author.birthYear === book.author.birthYear) && (someBook.author.name !== book.author.name)));
};

console.log(authorUnique());
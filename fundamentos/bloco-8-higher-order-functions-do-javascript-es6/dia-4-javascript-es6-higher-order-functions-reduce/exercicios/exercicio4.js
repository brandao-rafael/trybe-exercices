const { books } = require('./books');

const longestNamedBook = (object) => {
    const longestBook = object.reduce((acc, curr) => acc.name.length > curr.name.length ? acc : curr);
    return longestBook;
}

console.log(longestNamedBook(books));
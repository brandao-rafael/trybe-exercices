const { books } = require('./books');

const longestNamedBook = (object) => object.reduce((acc, curr) => acc.name.length > curr.name.length ? acc : curr)

console.log(longestNamedBook(books));
const books = require('./books');

const nameAndAge = books.map((book) => {
    const disordered = {};
    disordered.age = book.releaseYear - book.author.birthYear;
    disordered.author = book.author.name;
    return disordered;
});

const orderPerAge = nameAndAge.sort((a, b) => a.age - b.age);
console.log(orderPerAge);
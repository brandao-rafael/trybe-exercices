const { books } = require('./books');

const averangeAge = (object) => {
	const ageInReleaseYear = object.map((book) => book.releaseYear - book.author.birthYear);
	const average = ageInReleaseYear.reduce((acc, curr) => acc + curr) / ageInReleaseYear.length;
	return average;
}

console.log(averangeAge(books))
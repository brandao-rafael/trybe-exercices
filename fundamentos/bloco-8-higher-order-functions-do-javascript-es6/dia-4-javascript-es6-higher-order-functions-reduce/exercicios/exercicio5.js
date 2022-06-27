const names = [
	'Aanemarie', 'Adervandes', 'Akifusa',
	'Abegildo', 'Adicellia', 'Aladonata',
	'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = (arr) => {
	let upperCase = 0;
	let lowerCase = 0;
	const splitArray = arr.map((name) => name.split(''));
	const flattenArray = splitArray.reduce((acc, curVal) => acc.concat(curVal), []);
	flattenArray.reduce((_acc, curr) => curr === 'A' ? upperCase += 1 : curr === 'a' ? lowerCase += 1 : null, 0);
	return `maiusculas: ${upperCase} minusculas: ${lowerCase}`;
};
console.log(containsA(names));

// Another way from feedback

function containsA() {
	return names.reduce((acc, curr) =>
		acc + curr.split('').reduce((acumulator, current) => {
			if (current === 'a' || current === 'A') return acumulator + 1;
			return acumulator;
		}, 0), 0);
}
let atlete = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}

atlete['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018]



console.log('A jogadora ' + atlete.name + ' ' + atlete.lastName + ' foi eleita a melhor do mundo ' + atlete.bestInTheWorld.length + ' vezes')
console.log('A jogadora possui ' + atlete.medals.golden + ' medalhas de ouro e ' + atlete.medals.silver + ' medalhas de prata');
console.log('A jogadora ' + atlete.name + ' ' + atlete.lastName + ' tem ' + atlete.age + ' de idade.');
console.table(atlete)
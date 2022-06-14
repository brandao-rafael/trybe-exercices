function techList(techPar, namePar) {
    let tech = techPar.sort();
    if (techPar.length === 0) {
        return 'Vazio!';
    }
    let result = [];
    for (let i = 0; i < tech.length; i += 1) {
        let temp = {
            tech: tech[i],
            name: namePar,
        };
        result.push(temp);
    }
    return result;
}

module.exports = techList;
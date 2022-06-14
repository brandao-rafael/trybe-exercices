function encode(param) {
    let word = param.replaceAll('a', '1');
    word = word.replaceAll('e', '2');
    word = word.replaceAll('i', '3');
    word = word.replaceAll('o', '4');
    word = word.replaceAll('u', '5');
    return word;
}
function decode(param) {
    let word = param.replaceAll('1', 'a');
    word = word.replaceAll('2', 'e');
    word = word.replaceAll('3', 'i');
    word = word.replaceAll('4', 'o');
    word = word.replaceAll('5', 'u');
    return word;
}

module.exports = {encode , decode};
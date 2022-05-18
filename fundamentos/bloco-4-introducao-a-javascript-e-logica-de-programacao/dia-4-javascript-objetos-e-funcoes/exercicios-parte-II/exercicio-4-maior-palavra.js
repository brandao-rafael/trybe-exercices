function longestWord (words){
    let longest = '';
    for (let word of words){
        if (word.length > longest.length){
            longest = word;
        }
    }
    return longest
}
let testArray = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
console.log(longestWord(testArray));
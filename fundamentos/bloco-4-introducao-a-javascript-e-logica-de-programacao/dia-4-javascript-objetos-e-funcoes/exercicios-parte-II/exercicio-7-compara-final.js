function compareEnd (word, end){
    if (word.endsWith(end)){
        return true
    } else {
        return false
    }
}
console.log(compareEnd('trybe', 'be'));
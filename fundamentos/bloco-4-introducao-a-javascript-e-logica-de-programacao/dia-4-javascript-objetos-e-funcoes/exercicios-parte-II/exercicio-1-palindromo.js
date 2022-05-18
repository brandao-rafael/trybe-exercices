function checkPalindrome(word){
    let inverse = word.split('').reverse().join("");
    if (inverse === word){
        return true;
    } else {
        return false;
    }
};
console.log(checkPalindrome('ana'));
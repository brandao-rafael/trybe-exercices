function romanAlgarism (input){
    let conversor = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1,
    }
    comparator = input.split('');
    let result = 0;
    console.log(comparator)
    for (let key in conversor){
        if (comparator === key){
            result = conversor[key]
        }
    }
    
    return result
    // let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    // let number = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    // let result = 0;
    // let index = null;
    // for (let i = 0; i < roman.length; i +=1){
    //     if (input === roman[i]){
    //         index = roman.indexOf(input);
    //         result = number[index];
    //     }
    // }
    // return result;
}
console.log(romanAlgarism("XC"))
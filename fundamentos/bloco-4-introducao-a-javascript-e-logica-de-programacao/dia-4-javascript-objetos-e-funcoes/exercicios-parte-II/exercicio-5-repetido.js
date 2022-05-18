function repetitiveNumber (array){
    let number, numberTest, timesNumber = 0, timesTest = 0;
    array.sort();
    number = array[0];
    for(let index in array){
        if(array[index] == number) timesNumber++;
        else if(array[index] == numberTest) timesTest++;
        else if(timesNumber > timesTest){
            numberTest = array[index];
            timesTest = 0;
        } else {
            number = array[index];
            timesNumber = 0;
        }
    }
    return (timesNumber > timesTest) ? number : numberTest;
}
let testArray = [2, 3, 2, 5, 8, 2, 3]
console.log(repetitiveNumber(testArray));
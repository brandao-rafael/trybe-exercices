let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i += 1) {
  for (let j = 0; j < i; j += 1) {
    if (numbers[i] < numbers[j]) {
      let positionChange = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = positionChange;
    }
  }
}
console.log(numbers);

for (let i = numbers.length; i > 0 ; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (numbers[i] > numbers[j]) {
        let positionChange = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = positionChange;
      }
    }
}

console.log(numbers)

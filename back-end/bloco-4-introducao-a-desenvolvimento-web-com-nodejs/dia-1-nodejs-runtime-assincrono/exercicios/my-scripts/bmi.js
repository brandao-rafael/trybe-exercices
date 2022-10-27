const readline = require('readline-sync');

const calculateBMI = () => {

  const weight = readline.question("What's your weight? ");
  const height = readline.questionFloat("What's your height in meters? ");
  const BMIResult = weight / (height * height);
  switch (true) {
    case (BMIResult < 18.5):
      console.log('Under weight');
      break;
    case (BMIResult < 24.9):
      console.log('Normal weight');
      break;
    case (BMIResult < 29.9):
      console.log('Overweight');  
      break;
    case (BMIResult < 34.9):
      console.log('Obesity grade I');
      break;
      case (BMIResult < 39.9):
      console.log('Obesity grade II');
      break;
      case (BMIResult > 40):
      console.log('Obesity grade III');
      break;
    default:
      console.log('Error, verify yours answer');
      break;
  }
};

calculateBMI();

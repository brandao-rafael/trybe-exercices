// Esse script deverá se chamar volume.ts;
// Ele deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
// Obs: atente-se à conversão de metros cúbicos, que deve ser realizada de 1000 em 1000.
import readline from 'readline-sync';
const Unit = [ 'km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

export const convert = (value: number, fromUnit: string, toUnit: string): number => {
  const fromIndex = Unit.indexOf(fromUnit);
  const toIndex = Unit.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(1000, exponent);
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');

  const fromUnitChoiceIndex = readline.keyInSelect(Unit, 'Escolha um número para a unidade base:');

  const toUnitChoiceIndex = readline.keyInSelect(Unit, 'Escolha um número para a conversão:');

  const toUnitChoice = Unit[toUnitChoiceIndex];
  const fromUnitChoice = Unit[fromUnitChoiceIndex];

  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }
  
  const result = convert(value, fromUnitChoice, toUnitChoice);

  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

  console.log(message);
}

exec();

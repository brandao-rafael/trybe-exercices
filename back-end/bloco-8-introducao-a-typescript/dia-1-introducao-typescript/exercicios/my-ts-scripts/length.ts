// Crie um script para converter unidades de medida de comprimento:

// Esse script deverá se chamar length.ts;
// Ele deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
import readline from 'readline-sync';
const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

let convert = (value: number, fromUnit: string, toUnit: string): number => {
  const fromIndex = units.indexOf(fromUnit);
  const toIndex = units.indexOf(toUnit);
  const exponent = toIndex - fromIndex;
  return value * Math.pow(10, exponent)
}

function exec() {
  const value = readline.questionFloat('Digite o valor a ser convertido: \n');

  const fromUnitChoiceIndex = readline.keyInSelect(units, 'Escolha um número para a unidade base:');

  const toUnitChoiceIndex = readline.keyInSelect(units, 'Escolha um número para a conversão:');

  const toUnitChoice = units[toUnitChoiceIndex];
  const fromUnitChoice = units[fromUnitChoiceIndex];

  if (!fromUnitChoice || !toUnitChoice) {
    console.log(`Função cancelada`);
    return 0;
  }
  
  const result = convert(value, fromUnitChoice, toUnitChoice);

  const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;

  console.log(message);
}

exec();

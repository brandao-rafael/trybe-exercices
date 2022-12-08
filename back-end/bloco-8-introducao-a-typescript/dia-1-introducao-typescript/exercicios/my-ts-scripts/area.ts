// Crie um script para converter unidades de medida de área:

// Esse script deverá se chamar area.ts;
// Ele script deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
// Obs: atente-se à conversão de metros quadrados, que deve ser realizada de 100 em 100.
import readline from 'readline-sync';
const Unit = [ 'km²', 'hm²', 'dam²', 'm²', 'dm²', 'cm²', 'mm²'];

export const convert = (value: number, fromUnit: string, toUnit: string): number => {
  const fromIndex = Unit.indexOf(fromUnit);
  const toIndex = Unit.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(100, exponent);
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

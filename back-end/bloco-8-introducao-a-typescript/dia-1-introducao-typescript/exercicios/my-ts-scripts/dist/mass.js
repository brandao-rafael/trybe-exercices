"use strict";
// Crie um script para converter unidades de medida de massa:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
// Esse script deverá se chamar mass.ts;
// Ele deverá possuir uma função chamada convert que recebe como parâmetro:
// valor - number
// unidade base - string
// unidade para a conversão - string
const readline_sync_1 = __importDefault(require("readline-sync"));
const Unit = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];
const convert = (value, fromUnit, toUnit) => {
    const fromIndex = Unit.indexOf(fromUnit);
    const toIndex = Unit.indexOf(toUnit);
    const exponent = toIndex - fromIndex;
    return value * Math.pow(10, exponent);
};
exports.convert = convert;
function exec() {
    const value = readline_sync_1.default.questionFloat('Digite o valor a ser convertido: \n');
    const fromUnitChoiceIndex = readline_sync_1.default.keyInSelect(Unit, 'Escolha um número para a unidade base:');
    const toUnitChoiceIndex = readline_sync_1.default.keyInSelect(Unit, 'Escolha um número para a conversão:');
    const toUnitChoice = Unit[toUnitChoiceIndex];
    const fromUnitChoice = Unit[fromUnitChoiceIndex];
    if (!fromUnitChoice || !toUnitChoice) {
        console.log(`Função cancelada`);
        return 0;
    }
    const result = (0, exports.convert)(value, fromUnitChoice, toUnitChoice);
    const message = `${value}${fromUnitChoice} é igual a ${result}${toUnitChoice}`;
    console.log(message);
}
exec();

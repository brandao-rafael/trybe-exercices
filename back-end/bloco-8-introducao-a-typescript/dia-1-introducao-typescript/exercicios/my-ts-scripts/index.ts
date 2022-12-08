import readline from 'readline-sync';

const scripts = [
  { name: 'Converter comprimento', script: './length' },
  { name: 'Converter massa', script: './mass' },
  { name: 'Converter capacidade', script: './capacity' },
  { name: 'Converter area', script: './area' },
  { name: 'Converter volume', script: './volume' },
];

const scriptNames = scripts.map((item) => item.name);

const choice = readline.keyInSelect(scriptNames, 'escolha um numero para executar o script de conversão de unidade');

require(scripts[choice].script);
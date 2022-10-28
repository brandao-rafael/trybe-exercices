const fs = require('fs').promises;

const readAll = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  
  return strings.forEach((string) => console.log(string));
}

const getSimpsonsById = async (id) => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

  if (!chosenSimpson) throw new Error('id not found')
  return chosenSimpson
}

const filterSimpson = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  return simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
}

const createSimpsonFamily = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons.filter((simpson) => familyIds.includes(Number(simpson.id)));
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily));
}

const fs = require('fs').promises;

async function addNelsonToFamily() {
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');
  
  const simpsonsFamily = JSON.parse(fileContent);
  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
}

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([{ id: '15', name: 'Maggie Simpson' }]);
  // com spread seria assim: 
  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}

const main = async () => {
  const simpson = await getSimpsonsById(1);
  const filteredSimpson = await filterSimpson();
  await readAll();
  await createSimpsonFamily();
  await addNelsonToFamily();
  await replaceNelson();
  console.log(`by id`, simpson);
  console.log(`filtered`, filteredSimpson);
}

main();
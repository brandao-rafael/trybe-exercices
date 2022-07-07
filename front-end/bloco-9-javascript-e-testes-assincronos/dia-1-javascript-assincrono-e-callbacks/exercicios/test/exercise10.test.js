beforeEach(() => console.log('1 - beforeEach')); // Executara primeiro
afterEach(() => console.log('1 - afterEach')); // Executara após o teste da linha 4

test('', () => console.log('1 - test')); // Segundo na fila de execução 

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));  // Executara primeiro nesse bloco mas após a linha 2
  afterEach(() => console.log('2 - afterEach')); // Executara após a linha 10

  test('', () => console.log('2 - test')); // Executara após a linha 7
});

// A saida final será:
// 1 - beforeEach
// 1 - test
// 1 - afterEach
// 2 - beforeEach
// 2 - test
// 2 - afterEach
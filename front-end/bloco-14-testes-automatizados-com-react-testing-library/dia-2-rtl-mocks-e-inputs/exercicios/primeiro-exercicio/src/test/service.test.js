const service = require('../service');
let { generateRandomNumber, letUpperCase, firstLetter, concatString } = service;

describe('01-Testa a função generateRandomNumber', () => {
  
  it('Verifica se o retorno da função é um numero', () => {
    expect(typeof generateRandomNumber()).toBe('number');
  });
  
  it('Verifica o tipo de generateRandomNumber', () => {
    expect(typeof generateRandomNumber).toBe('function');
  });

  it('Verifica se a função foi chamada, qual o seu retorno e quantas vezes foi chamada', () => {
    generateRandomNumber = jest.fn().mockReturnValue(10);

    expect(generateRandomNumber()).toBe(10);
    expect(generateRandomNumber).toHaveBeenCalled();
    expect(generateRandomNumber).toHaveBeenCalledTimes(1);
  });
});

describe('02, 03 - ultilizando uma nova implementação, retorna o valor esperado', () => {
  it('02 - Passando dois valores, retorna a divisão entre esses valores', () => {
    const mockDivision = jest
      .spyOn(service, "generateRandomNumber")
      .mockImplementation((a, b) => a / b);
    service.generateRandomNumber(10, 5);

    expect(mockDivision).toHaveBeenCalledTimes(1);
    expect(mockDivision(10, 2)).toBe(5);
    expect(mockDivision).toHaveBeenCalledTimes(2);
    expect(mockDivision).toHaveBeenLastCalledWith(10, 2);
  });
  
  it('03 - Passando 3 valores, retorna a multiplicação desses valores', () => {
    const mockMultiply = jest
      .spyOn(service, "generateRandomNumber")
      .mockImplementation((a, b, c) =>  a * b * c);
    service.generateRandomNumber(2, 2, 2);

    expect(mockMultiply).toHaveBeenCalled();
    expect(mockMultiply(2, 2, 2)).toBe(8);
    expect(mockMultiply).toHaveBeenLastCalledWith(2, 2, 2);

    service.generateRandomNumber.mockReset();
    
    service.generateRandomNumber = jest.fn().mockImplementation((number) => number * 2);
    service.generateRandomNumber(5);

    expect(service.generateRandomNumber).toHaveBeenCalled();
    expect(service.generateRandomNumber(25)).toBe(50);
    expect(service.generateRandomNumber).toHaveBeenLastCalledWith(25);
    expect(service.generateRandomNumber).toHaveBeenCalledTimes(2);
  })
});

describe('04 - Testa as funções letUpperCase, firstLetter, concatString', () => {
  it('Verifica os novos mocks das funções', () => {
    const mockLetUpperCase = jest.spyOn(service, 'letUpperCase').mockImplementation((string) => string.toLowerCase());
    firstLetter = jest.fn().mockImplementation((string) => string.slice(- 1));
    concatString = jest.fn().mockImplementation((str1, str2, str3) => `${str1} ${str2} ${str3}`);
  
    expect(mockLetUpperCase('STRING')).toBe('string');
    expect(firstLetter('beterraba')).toBe('a');
    expect(concatString('ontem', 'comi', 'beterraba')).toBe('ontem comi beterraba');
    expect(mockLetUpperCase).toHaveBeenCalledTimes(1);
    expect(firstLetter).toHaveBeenCalledTimes(1);
    expect(concatString).toHaveBeenCalledTimes(1);
  });

  it('Testa se restaurando o mock a função letUpperCase tem seu comportamento normal', () => {
    service.letUpperCase.mockRestore();

    expect(letUpperCase('string')).toBe('STRING');
  })
});

describe('05 - testa a requisição', () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

  test("testando requisição caso retorne ok", async () => {
    service.fetchDog.mockResolvedValue("request success");

    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).resolves.toBe("request success");
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
  });

  test("testando requisição caso seja rejeitada", async () => {
    service.fetchDog.mockRejectedValue("request failed");

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    await expect(service.fetchDog()).rejects.toMatch("request failed");
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  });
})
const { encode, decode } = require('./encode');

describe('A função encode:', () => {
    it('Confere se encode é uma função', () => {
       expect(typeof encode).toBe('function'); 
    });
    it('recebe string converte vogal em numero', () => {
        expect(encode('bananeira')).toBe('b1n1n23r1');
    });
    it('não troca nenhuma consoante', () => {
        expect(encode('abcdefghijklmnopqrstuvwxyz')).toBe('1bcd2fgh3jklmn4pqrst5vwxyz');
    });
    it('o retorno tem o mesmo tamanho do parametro', () => {
        expect(encode('12345')).toHaveLength(5);
    });
});

describe('a função decode:', () => {
    it('Confere se encode é uma função', () => {
        expect(typeof decode).toBe('function'); 
     });
    it('recebe numero como vogal e decoda', () => {
        expect(decode('b1n1n23r1')).toBe('bananeira');
    });
    it('não troca nenhuma consoante', () => {
        expect(decode('1bcd2fgh3jklmn4pqrst5vwxyz')).toBe('abcdefghijklmnopqrstuvwxyz');
    });
    it('o retorno tem o mesmo tamanho do parametro', () => {
        expect(decode('aeiou')).toHaveLength(5);
    });
});
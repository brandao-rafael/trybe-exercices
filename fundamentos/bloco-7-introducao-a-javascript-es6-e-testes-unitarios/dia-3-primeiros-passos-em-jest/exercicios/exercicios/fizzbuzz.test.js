const fizzbuzz = require('./fizzbuzz');

describe('A função fizzbuzz', () => {
    it('se passado 9 retorna fizz', () => {
        expect(fizzbuzz(9)).toBe('fizz');
    });
    it('se passado 10 retorna buzz', () => {
        expect(fizzbuzz(10)).toBe('buzz');
    });
    it('se passado 15 retorna fizzbuzz', () => {
        expect(fizzbuzz(15)).toBe('fizzbuzz');
    });
    it('se passado uma string retorna false', () => {
        expect(fizzbuzz('9')).toBe(false);
    });
})
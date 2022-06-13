const sum = require('./sum');

describe('A função sum', () => {
    it('soma 4 + 5 é igual a 11', () => {
        expect(sum(4, 5)).toBe(9);
    });
    it('soma 0 + 0 é igual a 0', () => {
        expect(sum(0, 0)).toBe(0);
    });
    it('o valor é numerico', () => {
        expect(() => sum(4 , '5')).toThrow('parameters must be numbers');
    });    
});
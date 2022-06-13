const remove = require('./remove');

describe('A função myRemove', () => {
    it('se retorna [1, 2, 4] se passado myRemove([1, 2, 3, 4], 3)', () => {
        expect(remove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4]);
    });
    it('se não retorna [1, 2, 3, 4] se passado myRemove([1, 2, 3, 4], 3)', () => {
        expect(remove([1, 2, 3, 4], 3)).not.toBe([1, 2, 3, 4]);
    });
    it('se retorna [1, 2, 3, 4, 5] se passado myRemove([1, 2, 3, 4], 5)', () => {
        expect(remove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4]);
    });
});
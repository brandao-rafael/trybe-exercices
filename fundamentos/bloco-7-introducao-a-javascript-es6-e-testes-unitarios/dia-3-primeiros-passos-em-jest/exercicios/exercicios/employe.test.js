const searchEmploye = require('./employe');

describe('Testa se a função searchEmploye', () => {
    it('Testa se é uma função', () => {
        expect(typeof searchEmploye).toBe('function');
    });
    it('Testa se retorna o primeiro nome do usuário da id consultada', () => {
        expect(searchEmploye('1256-4', 'firstName')).toBe('Linda');
    });
    it('Testa se retorna o segundo nome do usuário da id consultada', () => {
        expect(searchEmploye('1256-4', 'lastName')).toBe('Bezos');
    });
    it('Testa se  retorna um array com todas as habilidades pesquisadas', () => {
        expect(searchEmploye('1256-4', 'specialities')).toContain('Hooks', 'Context API', 'Tailwind CSS');
    });
    it('Testa se um erro com a mensagem "id não identificada" é retornado quando a ID não existir', () => {
        expect(() => { searchEmploye('1256-8', 'specialities') }).toThrow();
    });
    it('Testa a mensagem do erro para id inexistente', () => {
        expect(() => { searchEmploye('1256-8', 'specialities') }).toThrowError(new Error("ID não identificada"));
    });
    it('Testa se lança um erro quando a informação e o id são inexistentes', () => {
        expect(() => { searchEmploye() }).toThrow();
    });
    it('Testa a mensagem do erro para informação inexistente', () => {
        expect(() => { searchEmploye('4678-2', 'shift') }).toThrowError(new Error("Informação indisponível"));
    });
});
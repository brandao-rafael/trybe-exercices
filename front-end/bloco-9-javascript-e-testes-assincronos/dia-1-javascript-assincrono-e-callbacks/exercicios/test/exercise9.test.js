// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("../exercise8.js");

describe("A função getPokemonDetails", () => {
    it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
        // Escreva aqui seu código
        const expected = new Error('Não temos esse pokémon para você :(');
        const callback = (error, result) => {
            expect(error).toEqual(expected);
            done();
        }

        getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
    });

    it("retorna um pokemon que existe no banco de dados", (done) => {
        // Escreva aqui seu código
        const callback = (error, result) => {
            expect(result).toBe('Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun');
            done();
        }

        getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', callback);
    });
});
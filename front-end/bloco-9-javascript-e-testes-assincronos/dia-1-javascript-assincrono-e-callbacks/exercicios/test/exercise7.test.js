const uppercase = (str, callback) => {
    setTimeout(() => {
        callback(str.toUpperCase());
    }, 500);
};

const logResult = (string) => console.log(string);

describe('confere se a função uppercase:', () => {
    it('Transforma o texto em maiusculo', (done) => {
        uppercase('hi there, my name is...', (result) => {
            try {
                expect(result).toEqual('HI THERE, MY NAME IS...');
                done();
            } catch(error) {
                done(error);
            }
        });
    });
});
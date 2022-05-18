let moradores = {
    blocoUm: [
        {
            nome: 'Luiza',
            sobrenome: 'Guimarães',
            andar: 10,
            apartamento: 1005,
        },
        {
            nome: 'William',
            sobrenome: 'Albuquerque',
            andar: 5,
            apartamento: 502,
        },
    ],
    blocoDois: [
        {
            nome: 'Murilo',
            sobrenome: 'Ferraz',
            andar: 8,
            apartamento: 804,
        },
        {
            nome: 'Zoey',
            sobrenome: 'Brooks',
            andar: 1,
            apartamento: 101,
        },
    ],
};

let moradoresBlocoUm = '';
let moradoresBlocoDois = '';
for (let i = 0; i < moradores.blocoUm.length; i += 1){
    moradoresBlocoUm += moradores.blocoUm[i].nome + ' ' + moradores.blocoUm[i].sobrenome + "\n";
}
console.log(moradoresBlocoUm);
for (let i = 0; i < moradores.blocoDois.length; i += 1){
    moradoresBlocoDois += moradores.blocoDois[i].nome + ' ' + moradores.blocoDois[i].sobrenome + "\n";
}
console.log(moradoresBlocoDois)
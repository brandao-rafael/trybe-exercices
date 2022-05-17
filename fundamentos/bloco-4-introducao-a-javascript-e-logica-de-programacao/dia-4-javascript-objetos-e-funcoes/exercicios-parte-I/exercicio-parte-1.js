let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let infoPatinhas = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
}

// console.log('Bem-vinda, ' + info.personagem);
info['recorrente'] = 'Sim'
infoPatinhas['recorrente'] = 'Sim'
// console.log(info, infoPatinhas);

// for (let key in info){
//     // console.log(key);
// }
// for (let key in info){
//     // console.log(info[key]);
// }
i = 0
for (let key in info) {
    if (i === 3) {
        break;
    }

    if (info.recorrente === infoPatinhas.recorrente) {
        info.recorrente = 'Ambos recorrentes';
    }
    console.log(info[key] + " e " + infoPatinhas[key]);
    i += 1;
}
console.log(info.recorrente)

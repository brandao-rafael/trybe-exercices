let p = 'camelo';

let pieces = p.toLowerCase();

if (pieces === 'peao'){
    console.log('1 pra frente ou pro lado em caso de peça inimiga');
} else if (pieces === 'cavalo'){
    console.log('pode andar em L')
} else if (pieces === 'bispo'){
    console.log('pode andar na diagonal quantas casas quiser');
} else if (pieces === 'torre'){
    console.log('pode andar pra frente, tras ou lados quantas casas quiser');
} else if (pieces === 'dama'){
    console.log('escolha uma direção e vá');
} else if (pieces === 'rei'){
    console.log('uma casa para qualqeur direção');
} else {
    console.log('Por favor, escolha uma peça válida');
}
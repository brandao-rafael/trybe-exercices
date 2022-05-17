//Problema: Dada a posição da rainha e a posição do opnente, devemos verificiar se ela pode ou não atacar.
//OBS: Não iremos efetivamente movimentar a rainha.

//Posição da rainha
let queenRowPosition = 8;
let queenColumnPosition = 1;

//Posição do oponente
let opponentRowPosition = 1;
let opponentColumnPosition = 8;

//Armazendar se ataque pode ou não acontecer
let canAttack = false;

if(opponentColumnPosition === queenColumnPosition ||
    opponentRowPosition === queenRowPosition){
    canAttack = true;
    console.log('Ataque em linha reta');
};

//Diagonal superior direita;
for(let iSupDir = 1; iSupDir < 8; iSupDir += 1 ){
    let currentQueenRow = queenRowPosition + iSupDir;
    let currentQueenColumn = queenColumnPosition + iSupDir;

    // console.log(currentQueenRow, currentQueenColumn);

    if(currentQueenRow > 8 || currentQueenColumn > 8){
        break;
    };

    if(currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition){
        canAttack = true;
        console.log('Ataque na diagonal superior direita');
    }
};

//Diagonal inferior direita;
for(let iInfDir = 1; iInfDir < 8; iInfDir += 1 ){
    let currentQueenRow = queenRowPosition - iInfDir;
    let currentQueenColumn = queenColumnPosition + iInfDir;

    //console.log(currentQueenRow, currentQueenColumn);

    if(currentQueenRow < 1 || currentQueenColumn > 8){
        break;
    };

    if(currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition){
        canAttack = true;
        console.log('Ataque na diagonal inferior direita');
    }
};

//Diagonal inferior esquerda
for(let iInfEsq = 1; iInfEsq < 8; iInfEsq += 1){
    let currentQueenRow = queenRowPosition - iInfEsq;
    let currentQueenColumn = queenColumnPosition - iInfEsq;

    // console.log(currentQueenRow, currentQueenColumn);

    if(currentQueenRow < 1 || currentQueenColumn < 1){
        break;
    };

    if(currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition){
        canAttack = true;
        console.log('Ataque na diagonal inferior esquerda');
    };
};

//Diagonal superior esquerda
for(let iSupEsq = 1; iSupEsq < 8; iSupEsq += 1){
    let currentQueenRow = queenRowPosition + iSupEsq;
    let currentQueenColumn = queenColumnPosition - iSupEsq;

    // console.log(currentQueenRow, currentQueenColumn);

    if(currentQueenRow > 8 || currentQueenColumn < 1){
        break;
    };

    if(currentQueenRow === opponentRowPosition && currentQueenColumn === opponentColumnPosition){
        canAttack = true;
        console.log('Ataque na diagonal superior esquerda');
    };
};
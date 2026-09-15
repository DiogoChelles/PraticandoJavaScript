//* 1. CONTAGEM DE 1 A 10

// const umAdez = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i <= 0; i++) {
//     console.log(umAdez);
// }

// ****************************************************************************************

//* 2. TABUADA DE UM NÚMERO

// const sete = 7;

// for (let i = 1; i <= 10; i++) {
//     console.log(sete * i);
// }

// ****************************************************************************************

//* 3. SOMA DOS PRIMEIROS "N" NÚMEROS NATURAIS

let a = 0;
let anterior = 0;
let atual = 0;

for (let N = Number(prompt("Digite um número:")); N != 0; N--) {
    // pegue o numero 0 e some 1;
    // na segunda vez, soma mais 1 e guarde o valor;
    // na terceira, pegue o valor guardado e some mais 1;
    // até chegar ao N;

    atual = atual + N;
    console.log(atual);
    }

    
// ****************************************************************************************
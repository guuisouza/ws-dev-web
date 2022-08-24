let carros = ['Chevete', 'Fusca', 'Opala', 'Fiorino', 'Belina', 'Del rey']

/*
    O método includes() testa se um dado elemento existe em um vetor.
    Retorna true/false.
*/
let temFusca = carros.includes('Fusca')
let temBelina = carros.includes('Belina')
let temCorcel = carros.includes('Corcel')

console.log({temFusca, temCorcel, temBelina})

/* 
    O método indexOf() retorna o índice (posição) de um elemento no vetor.
    Caso o elemento não exista, retorna o valor -1.
*/

let idxFusca = carros.indexOf('Fusca')
let idxBelina = carros.indexOf('Belina')
let idxCorcel = carros.indexOf('Corcel')

console.log({idxFusca, idxCorcel, idxBelina})

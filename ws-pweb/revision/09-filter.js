const numeros = [10,19,3,-4,13,-11,15,0,-1]
const frutas = ['laranja', 'acabaxi', 'maça', 'uva', 'jabuticaba', 'maracujá']

/* 
    O método filter() cria um NOVO VETOR contendo apenas os elementos do vetor
    de origem que atendam ao criterio da funcao passada como parâmetro
*/

let negativos = numeros.filter(i => i<0)
let div5 = numeros.filter(j => j % 5 === 0)
let comecaComM = frutas.filter(a => a.charAt(0) === 'm')
let comecaComJ = frutas.filter(x=> x.charAt(0) === 'j')
let comecaComB = frutas.filter(y=> y.charAt(0) === 'b')

console.log({negativos, div5, comecaComM, comecaComJ, comecaComB})
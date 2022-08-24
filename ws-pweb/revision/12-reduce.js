let nums = [2,3,5,7,11,13,17,19,28,29,31]
let nomes = ['Aderbal','Joeliton', 'Neurivânia', 'Terebintina']

/* reduce() é um metodo que reduz um vetor a um valor singular
    Ele fará isso aplicando uma função a cada elemento do vetor
    original, aplicando uma transformação e acumulando os resultados a cada passada
*/

//reduce() para somar todos os elementos do vetor nums
let soma = nums.reduce((elemento, acumulador)=> acumulador + elemento)

//reduce() para colocar em maiúsculas e concatenar com virgulas intercaladas
//cada elemento do vetor nomes
let listaNomes = nomes.reduce((el, acum)=> acum.toUpperCase()+ ', ' + el.toUpperCase())

console.log({soma, listaNomes})

// let minimo = Math.min(2,-7,-4,8,4,0)
// let maximo = Math.max(2,-7,-4,8,4,0)

let nums = [2,-7,8,4,0]

// let minimo = Math.min(nums) //Não funciona
// let maximo = Math.max(nums) //Nao funciona

//A sintaxe de espalhamento (spreading) é capaz de
//desempacotar um vetor em uma lista de valores avulsos

let minimo = Math.min(...nums)
let maximo = Math.max(...nums)
console.log({minimo, maximo})

console.log('Vetor "Empacotado": ', nums)
console.log('Vetor "Desempacotado": ', ...nums)

////////////////////////////////////////////////////////////////////////////////////////////////////

let carro1 = {
    modelo: 'Fiorino',
    marca: 'Fiat',
    ano: 1984,
    cor:'bege'
}

// let carro2 = carro1 //Não funciona pois dessa forma está apenas sendo criada uma nova referencia e nao um novo objeto ou variavel
let carro2 = {...carro1}

carro2.marca = 'Chevrolet'
carro2.modelo = 'Opala'
carro2.cor = 'preto'
carro2.ano = 1979

console.log({carro1, carro2})

////////////////////////////////////////////////////

let frutas = ['maça', 'banana', 'laranja']
let verduras = ['alface', 'couve', 'rúcula']
/*let hortifruti = frutas.concat(verduras)//Vetor que contem tanto verduras quanto frutas*/
let hortifruti = [...frutas,...verduras]

console.log({hortifruti})

//Problema: como declarar uma função que aceita um número arbitrario de parâmetros
console.log(soma(10,12,15,18,7,2,19)) //7 parametros
console.log(soma(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15))

//O espalhamento também  resolve esse tipo de problema. Pode ser usado em parâmetro
//de função, quando então passa a ser conhecido como PARÂMETRO
//DE RESTO.

function soma (...nums){
    let res = 0
    //Dentro da função o parâmetro de resto se compoorta como um vetor
    for (let num of nums) res += num
    return res
}

function calcular(oper, ...nums){
    let res 
    if (oper === '+'){
        res = 0
        for(let num of nums) res += num
    }
    else if (oper === '*'){
        res = 1
        for(let num of nums) res *= num
    }
    return res
}

console.log('Soma dos números de 1 a 5: ', calcular('+',1,2,3,4,5))
console.log('Produto dos números de 1 a 5: ', calcular('*',1,2,3,4,5))
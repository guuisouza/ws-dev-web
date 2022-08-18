function quadrado (n){
    return (n*n)
}
console.log(quadrado(7))

//Funcao equivalente ao arrow function

const quadradoA = n => n * n
console.log(quadradoA(7))

//Função tradicional com mais de 1 argumento e uma unica linha de retorno

function soma(a,b,c) {
    return a + b + c
}

console.log(soma(10,15,20))

//Arrow function equivalente

const somaA = (a, b, c) => a + b + c
console.log(somaA(10,15,20))

//Função tradicional sem argumentos e uma  unica linha de corpo com return
function aleatorio0a9(){
    //Math.random() = gera um número aleatório fracionário entre 0 e 1
    //Math.floor() = retira as casas decimais de um número fracionário
    return Math.floor(Math.random() * 10)
}

console.log(aleatorio0a9())

//Arrow function sem argumento
const aleatorio0a9A = () => Math.floor(Math.random() * 10)
console.log(aleatorio0a9A())

//Funcao deterministica = passando o mesmo argumento vai passar o mesmo resultado
//Funcao nao deterministica = passando um mesmo argumento nao tem garantia q o resultado vai ser o mesmo

//Funcao tradicional com um argumento e multiplas linhas de corpo
function fatorial (n) {
    let fat = 1
    for(let i=n; i>1;i--) fat *= i
    return fat
}

console.log(fatorial(6))

//Funcao arrow function equivalente, não há economia de linhas/código em relação ao corpo da funcao

const fatorialA = n => {
    let fat = 1
    for(let i=n; i>1;i--) fat *= i
    return fat
}

console.log(fatorialA(6))
let fullname = 'Jucicleison Junqueira Júnior'
let username = 'Junin'
let group = 'alunos'

//Criando um objeto a partir das variáveis acima
//Note que os nomes das propriedades do objeto sao IGUAIS aos nomes das variáveis

// let user = {
//     fullname: fullname,
//     username: username,
//     group: group
// }

//Refazendo o objeto c propriedades abreviadas
let user = {
    fullname,
    username,
    group,
    password: 'deus'
}

console.log(user)
//Usando proprieadades abreviadas para efeitos de depuração
//Exibindo o valor de duas variaveis, os valores são exibidos mas a saida nao informa de quais variaveis

let x = 10, y = 5
console.log(x,y) 

// Saída melhorada: passando um objeto com propriedades abreviadas para o console.log(), como uma forma de sabermos
// de quais variáveis provêm os valores

console.log({x, y})

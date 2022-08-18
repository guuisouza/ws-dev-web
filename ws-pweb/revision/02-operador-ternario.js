let media = 7.2, resultado

//Estrutura if..else para definir o valor da variavel resultado em funcao da condição media >= 6

/*if(media >= 6) {
    resultado = 'Aprovado'
}
else{
    resultado = 'Reprovado'
}

console.log({media,resultado})

*/

//encurtando para 2 linhas abaixo: 
/* if (media >= 6) resultado = 'Aprovado'
else resultado = 'Reprovado' */

//encurtando ainda mais com operador ternario, se uma variavel depende de uma condição da pra usar
resultado = media >= 6 ? 'APROVADO' : 'Reprovado'
console.log({media, resultado})


//uma nova função if else transformada com operador ternario
let user = 'guest', msg

/*forma normal
    if (user == 'admin') msg = 'Login sucessful'
    else msg = 'You are not allowd here'
*/

msg = user == 'admin' ? 'Login sucessfull' : 'You are not allowed here'

console.log({user, msg})

let nome = 'Gilcieide'
let idade = 20
let cidade = 'Franca/SP'

console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos e moro em' + cidade + '.')

//Mesma mensagem usando string template
//String template sao strings especiais delimitadas entre
//Os caracteres `` (acentos graves, 'crases'), que permitem
//a interpolação direta de variaveis
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`)

//Dentro de uma string template, não estamos limitados a colocar apenas variaveis entre ${}
//Na realidade podemos calcular qualkquer codigo JS válido
console.log(`Daqui a 5 anos, ${nome.toLocaleUpperCase()} terá ${idade + 5} anos`)
import * as React from 'react'

function Greeting({initialName = ''}) {
  // 🐨 inicialize o estado como o valor do localStorage
  // 💰 window.localStorage.getItem('name') ?? initialName
  const [name, setName] = React.useState(
    //Se existir um valor para "name" armazenado no localStorage, use-o como valor inicial para a variável de estado
    //senão, use o valor da variavel initialName
    //?? -> operador de coalescência de nulos (se o primeiro valor for nulo usa o segundo)

    //Lazy Initializer (inicializacao preguiçosa)
    //Faz com que o valor inicial da variavel de estado seja ajustado apenas uma vez,
    //na fase da montagem.
    //Para obter esse efeito, basta passar o valor inicial no formato 
    //de uma função
    () => obterLocalStorage() ?? initialName
  )

  function obterLocalStorage(){
    console.count('Leu localStorage')
    return window.localStorage.getItem('name')
  }

  // 🐨 Aqui é onde usamos `React.useEffect`.
  // A função deve armazenar `name` no localStorage.
  // 💰 window.localStorage.setItem('name', name)

  //Criando o useEffect
  //useEffect leva 2 parametros:
  //01 - Uma função (geralmente no formato arrow function), que será executada como um efeito colateral da atualização do componente
  //02 -  Um vetor de dependencias (variáveis que serão "vigiadas") por atualizações para disparar o useEffect
  React.useEffect(() => {
    //Armazenando o valor da variável de estado name no localStorage
    window.localStorage.setItem('name', name)
    //Conta a quantidade de atualizações do componente
    console.count('atualizei')
  }, [name]) 

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Olá {name}</strong> : 'Por favor, informe seu nome'}
    </div>
  )
}

function Exercicio02() {
  return <Greeting initialName='Turíbio'/>
}

export default Exercicio02
import * as React from 'react'
import VanillaTilt from 'vanilla-tilt'

function Tilt({children}) {
  // 🐨 crie uma ref aqui usando React.useRef()
  const tiltRoot = React.useRef() //Permite fazer referencia a um elemento
  // 🐨 adicione uma função `React.useEffect` aqui e use VanillaTilt para
  // fazer sua div parecer fantástica.
  // 💰 assim:
  // const tiltNode = tiltRef.current
  // VanillaTilt.init(tiltNode, {
  //   max: 25,
  //   speed: 400,
  //   glare: true,
  //   'max-glare': 0.5,
  // })
  React.useEffect (() => {
      const vanillaRoot = tiltRoot.current
      VanillaTilt.init(vanillaRoot, {
          max: 25,
          speed: 400,
          glare: true,
          'max-glare': 0.5,
        })

        //Destroi as divs extras criadas pelo vanilla tilt
        //Quando useEffect tem um valor de retorno e esse valor de retorno
        //é uma função, essa função será executada na fase umount do componente
        return () => {
            vanillaRoot.vanillaTilt.destroy()
            // alert('destruido')
        }    
  }, []) //colchetes = vetor de dependencia
  //Local onde informamos quais variaveis queremos "vigiar" para saber quando
  //há atualização. Pra fazer atualizacoes vetor de dependencia preenchido, se não, vazio.

  //Quando o vetor de dependências do useEffect() fica vazio, este é executado apenas uma vez na fase mount do componente

  // 💰 Não se esqueça de retornar uma função de limpeza. VanillaTilt.init 
  // vai adicionar um objeto ao seu DOM, precisando ser eliminado:
  // `return () => tiltNode.vanillaTilt.destroy()`
  
  // 💰 Não se esqueça de especificar seu vetor de dependências! No nosso
  // caso, samemos que o nodo do tilt nunca muda, então ajuste o vetor para `[]`.

  // 🐨 adicione a prop `ref` à div `tilt-root` aqui:
  return (
    <div className="tilt-root" ref={tiltRoot}>
      <div className="tilt-child">{children}</div>
    </div>
  )
}

function Exercicio05() {
  return (
    <>
    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>

    <Tilt>
      <div className="totally-centered">vanilla-tilt.js</div>
    </Tilt>
    </>  
  )
}

export default Exercicio05
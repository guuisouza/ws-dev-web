import * as React from 'react'

function Teste(){
    /*
        Um componente react pode retornar apenas UM elemento
        Caso seja necessario retornar mais de um elemento, pode-se
        agrupá-los dentro de um pseudoelemento chamado Fragment,
        representado por <> e </>.
    */
    return(
        <>
            <h1>Página Inicial do Projeto</h1>
            <p>Este é um componente customizado criado em um projeto React </p>
        </>
    )    
}

export default Teste
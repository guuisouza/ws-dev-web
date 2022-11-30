/*

    Esta prova consiste em acrescentar um novo componente/página ao projeto Karangos.

    1. Copie este arquivo para a pasta src/pages.

    2. Copie o arquivo "easter-egg.png" para a pasta assets.

    3. Altere o arquivo "Apps.js" e adicione um novo Route, com o valor path="/". 
       Assegure-se de que esse novo Route seja POSICIONADO ANTES de todos os outros. 
       Faça com que o componente StartPage seja carregado pelo novo Route. Dessa forma, 
       o componente será exibido logo no início.

    4. No componente StartPage, crie uma variável de estado de objeto contendo duas propriedades:
        - about (valor inicial: string vazia)
        - imgVisible (valor inicial: false)
       Crie também as respectivas variáveis avulsas usando desestruturação.
    
    5. Dentro da função fetchData(), no local indicado, atualize a variável de estado
       com o valor retornado em response.data.

    6. Crie um hook useEffect que seja executado apenas durante a fase de montagem do
       componente e, dentro dele, efetue uma chamada à função fetchData().

    7. Faça as modificações necessárias na tag <img> para que a imagem "easter-egg.png" seja exibida.

    8. Ao clicar no botão que está dentro da toolbar, a propriedade da variável de estado
       "imgVisible" deve inverter seu valor (ou seja, de true para false ou de false para true).
       Dessa forma, a imagem da div logo abaixo será exibida se estiver oculta, e será ocutada 
       se estiver sendo exibida. Veja as imagens RESULTADO1.png e RESULTADOO2.png para referência.

    9. Comente o código-fonte, explicando o respectivo funcionamento.

    10. Coloque os arquivos "App.js" e "StartPage.js" em um ZIP para fazer a entrega da prova.

*/

import React from 'react'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import api from '../lib/api'
import img from '../assets/easter-egg.png' //Importando a imagem para ser utilizada na div 


export default function StartPage() {
    //Criando a váriavel de estado
    const [state, setState] = React.useState({about: '', imgVisible: false })
    //Criando agora as váriaveis avulsas (propriedades)
    const {about, imgVisible} = state
    
    //Criando o useEffect com um vetor de dependências vazio para ser executado
    //apenas uma vez no momento da montagem do componente e aparecer o texto
    React.useEffect(() => {
        fetchData() //Agora a função fetchData é utilizada
    }, [])

    async function fetchData(newState = state) {
        try {
            const response = await api.get('/sobre/1')
            //Atualizando o campo about do state com o valor de response.data, porém atualizando apenas a propriedade about
            //sendo assim utilizando o espalhamento
            setState({...newState, about: response.data})
        }
        catch(erro) {
            alert('ERRO: ' + erro.message)
        }
    }

    return (

        <>
            <h1>Sobre o projeto Karangos</h1>

            <div dangerouslySetInnerHTML={{__html: about.info}} />

            <Box sx={{ textAlign: 'center' }}>
                <Toolbar sx={{ justifyContent: 'space-around' }}>
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={() => {
                            //Atualizando o campo imgVisible da variavel de estado para que ao clicar no botão a imagem seja exibida
                            //Porém atualizando somente a propriedade imgVisible usando o espalhamento.
                            setState(prevState => ({...prevState, imgVisible: true}))
                        }}
                    >
                        Surpresa!
                    </Button>
                </Toolbar>
                <img alt="Carros antigos" style={{ /*Alterando a tag img*/
                    display: 'block',
                    margin: '0 auto',
                    transition: 'opacity 1s linear',
                    opacity: imgVisible ? '1' : '0', 
                    height: imgVisible ? '591px': '0'
                }} src={img} /> {/* Utilizando a imagem importada dentro da tag <img> */}
            </Box>
        </>
    )
}
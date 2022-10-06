import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Teste from './components/teste'
import OutroTeste from './components/outroTeste';
import Exercicio01 from './exercicios/01';
import Exercicio02 from './exercicios/02';
import Exercicio03 from './exercicios/03';

function App() {
  return (
    <div className="App">
      <BrowserRouter> {/*Informa que teremos um roteamento de componentes*/}
        <header>

          <h1>Exercícios de React Hooks</h1>
          <nav>
            <ul> {/*Lista nao ordenada de bolinha*/}
              <li><Link to="/teste">Teste</Link></li>
              <li> <Link to="/outroteste">OutroTeste</Link> </li>
              <li> <Link to="/01">Exercicio 01</Link> </li>
              <li> <Link to="/02">Exercicio 02</Link> </li>
              <li> <Link to="/03">Exercicio 03</Link> </li>
            </ul>
          </nav>

        </header>
        <main style={{
          padding: "20px",
          margin:"20px",
          border: "1px solid navy"
        }}>
          <Routes>
            <Route path="/teste" element={ <Teste /> } /> {/*Quando a rota for teste exibe esse*/}
            <Route path="/outroteste" element={ <OutroTeste /> } /> {/*Quando a rota for outroteste exibe esse*/}
            <Route path="/01" element={ <Exercicio01 /> } />
            <Route path="/02" element={ <Exercicio02 /> } />
            <Route path="/03" element={ <Exercicio03 /> } />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;

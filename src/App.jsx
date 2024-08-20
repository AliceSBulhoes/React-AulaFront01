import Result from "./components/Result"
import { useState, useEffect } from "react" //Hooks 
import Header from "./components/Header"
import "./css/App.css"
import "./css/base.css"

function App() {
  //Hooks - useStates: Altera o valor da variável
  const[altura,setAltura] = useState(0);
  const[peso,setPeso] = useState(0);
  const[resultado,setResultado] = useState(0);
  const[mostrarResultado, setMostrarResultado] = useState(false);

  //Criando a função
  const calcularIMC = () =>{
    const IMC = peso / (altura*altura);

    return setResultado(IMC.toFixed(2));
  }

  //Hooks - useEffect: Faz um efeito colateral no resultado
  useEffect(()=>{
    resultado > 0 ? setMostrarResultado(true):setMostrarResultado(false);
  }, [resultado]);

  return (
    <>
      <div className="container">
          <div className="box">
            <Header/>
            <form>
              <div className="box-input">
                <label htmlFor="altura">Altura: <span className="span">(Exemplo: 1.80)</span></label>
                <input type="number" id="altura" placeholder="Digite a sua Altura" onBlur={({target}) => parseFloat(setAltura(target.value))} />
              </div>
              <div className="box-input">
                <label htmlFor="peso">Peso: <span className="span">(Exemplo: 50)</span></label>
                <input type="number" id="peso" placeholder="Digite o seu Peso" onBlur={({target}) => parseInt(setPeso(target.value))} />
              </div>
              <button type="submit" onClick={calcularIMC}>Calcular</button>
            </form>
          </div>

          {mostrarResultado &&(
            //Definindo uma props
            <Result resultado = {resultado} />
          )}

      </div>
    </>
  )
}

export default App

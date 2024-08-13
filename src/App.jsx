import Result from "./components/Result"
import { useState, useEffect } from "react" //Hooks

function App() {



  return (
    <>
      <div className="container">
          <div className="box">
            <form>
              <div>
                <label htmlFor="altura">Altura: <span className="span">(Exemplo: 1.80)</span></label>
                <input type="number" id="altura" placeholder="Digite a sua Altura" onBlur={({target}) => parseFloat(setAltura(target.value))} />
              </div>
              <div>
                <label htmlFor="peso">Peso: <span className="span">(Exemplo: 50)</span></label>
                <input type="number" id="peso" placeholder="Digite o seu Peso" onBlur={({target}) => parseInt(setPeso(target.value))} />
              </div>
              <button type="submit" onClick={calcularIMC()}>Calcular</button>
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

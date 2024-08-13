import React from 'react'

const Dados = (resultado) =>{
    if(resultado < 18.5){
        return(
            <>
                <td>Abaixo do Peso</td>
                <td>Abaixo de 18.5</td>
            </>
        )
    }else if(resultado >= 25 && resultado < 30){
        return(
            <>
                <td>Sobre Peso</td>
                <td>25 - 29.9</td>
            </>
        )
    }else if(resultado >= 30){
        return(
            <>
                <td>Obesidade</td>
                <td>Maior que 30</td>
            </>
        )
    }
}

const Result = ({resultado}) => {
  return (
    <>
        <div className='resltado'>
            <h2>Seu IMC é de: <span className='imgSpan'>{resultado}</span></h2>
        </div>
        <table className='table'>
            <thead className=''>
                <tr>
                    <th>Classificação: </th>
                    <th>IMC</th>
                </tr>
            </thead>
            <tbody className='tableBody'>
                <tr>{Dados()}</tr>
            </tbody>
        </table>
    </>
  )
}

export default Result

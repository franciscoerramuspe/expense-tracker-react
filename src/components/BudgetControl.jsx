import React from 'react'

const BudgetControl = ({presupuesto}) => {
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div> 
            <p>Graph goes here</p>
        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>Budget: </span> ${presupuesto}
            </p>
        </div>
    </div>
    
  )
}

export default BudgetControl
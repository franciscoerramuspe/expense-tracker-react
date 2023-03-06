import React from 'react'

const BudgetControl = ({presupuesto}) => {

    const formatBudget = (budget) => {
        return budget.toLocaleString('en-US', {
            style: "currency", 
            currency: "USD"
        })
    }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div> 
            <p>Graph goes here</p>
        </div>
        <div className='contenido-presupuesto'>
            <p>
                <span>Budget: </span> {formatBudget(presupuesto)}
            </p>
            <p>
                <span>Available: </span> {formatBudget(0)}
            </p>
            <p>
                <span>Spent: </span> {formatBudget(0)}
            </p>
        </div>
    </div>
    
  )
}

export default BudgetControl
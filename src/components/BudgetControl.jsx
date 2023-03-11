import { useState, useEffect } from 'react'

const BudgetControl = ({expenses, presupuesto}) => {

    const [available, setAvailable] = useState(presupuesto)
    const [spent, setSpent] = useState(0)


    useEffect(() => {
        const totalSpent = expenses.reduce( (total, expense) => expense.price + total, 0); 
        const totalAvailable = presupuesto - totalSpent

        setSpent(totalSpent)
        setAvailable(totalAvailable)
    }, [expenses])

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
                <span>Available: </span> {formatBudget(available)}
            </p>
            <p>
                <span>Spent: </span> {formatBudget(spent)}
            </p>
        </div>
    </div>
    
  )
}

export default BudgetControl
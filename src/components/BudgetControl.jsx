import { useState, useEffect } from 'react'
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BudgetControl = ({expenses, presupuesto}) => {

    const [percentage, setPercentage] = useState(0)
    const [available, setAvailable] = useState(0)
    const [spent, setSpent] = useState(0)


    useEffect(() => {
        const totalSpent = expenses.reduce( (total, expense) => expense.price + total, 0); 
        const totalAvailable = presupuesto - totalSpent

        const newPercentage = ( ( (presupuesto - totalAvailable) / presupuesto) * 100).toFixed(2);
        console.log(newPercentage)
        
        
        
        setAvailable(totalAvailable)
        setSpent(totalSpent)
        setTimeout(() => {
            setPercentage(newPercentage)
        }, 500)
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
            <CircularProgressbar 
                value={percentage}

            />
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
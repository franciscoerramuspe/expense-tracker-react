import { useState, useEffect } from 'react'
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const BudgetControl = ({
    expenses,
    setExpenses,
    presupuesto,
    setPresupuesto,
    setIsValidBudget
    }) => {

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

    const handleResetApp = () => {
        const result = confirm('Do you want to reset budget and expenses?');
        if(result) {
            setExpenses([])
            setPresupuesto(0)
            setIsValidBudget(false)
        } else {
            console.log('No')
        }
    }
    
    const circleColor = percentage >= 80 ? '#dc2626' : '#3b82f6';


    
  return (
    
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
        <div> 
            <CircularProgressbar
                
                styles={buildStyles({
                    pathColor: circleColor,
                    trailColor: '#f5f5f5',
                    pathTransitionDuration: 0.9,
                    textColor: circleColor
                })}
                value={percentage}
                text={`${percentage}% spent`}


            />
        </div>
        <div className='contenido-presupuesto'>
            <button 
                className="reset-app"
                type="button"
                onClick={handleResetApp}
            >Reset app</button>
            <p>
                <span>Budget: </span> {formatBudget(presupuesto)}
            </p>
            <p className={`${available < 0 ? 'negativo' : ''}`}>
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
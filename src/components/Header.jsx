import React from 'react'
import NewBudget from './NewBudget'
import BudgetControl from './BudgetControl'

const Header = ({ presupuesto, 
                setPresupuesto, 
                isValidBudget, 
                setIsValidBudget }) => {
  return (
    <header>
        <h1>Expense Tracker</h1>

        {isValidBudget ? (
            <BudgetControl
                presupuesto={presupuesto}
            />
        ) : (
            <NewBudget
                presupuesto = {presupuesto}
                setPresupuesto = {setPresupuesto}
                setIsValidBudget={setIsValidBudget}
         />   
        )}
        
    </header>
   

  )
}

export default Header
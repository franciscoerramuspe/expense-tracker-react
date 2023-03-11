import React from 'react'
import NewBudget from './NewBudget'
import BudgetControl from './BudgetControl'

const Header = ({ 
                expenses,
                presupuesto, 
                setPresupuesto, 
                isValidBudget, 
                setIsValidBudget }) => {
  return (
    <header>
        <h1>Expense Tracker</h1>

        {isValidBudget ? (
            <BudgetControl
                expenses = {expenses}
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
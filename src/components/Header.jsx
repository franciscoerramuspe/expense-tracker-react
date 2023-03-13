import React from 'react'
import NewBudget from './NewBudget'
import BudgetControl from './BudgetControl'

const Header = ({ 
                expenses,
                setExpenses,
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
                setExpenses={setExpenses}
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidBudget={setIsValidBudget}
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
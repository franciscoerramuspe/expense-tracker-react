import React from 'react'
import NewBudget from './NewBudget'

const Header = ({ presupuesto, 
                setPresupuesto, 
                isValidBudget, 
                setIsValidBudget }) => {
  return (
    <header>
        <h1>Expense Tracker</h1>

        {isValidBudget ? (
            <p>Contorl your budgets</p>
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
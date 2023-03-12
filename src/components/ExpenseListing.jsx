import React from 'react'
import Expense from './Expense'


const ExpenseListing = ({expenses, setEditExpense, eraseExpense}) => {
  return (
    <div className='listado-gastos contenedor'>
        
        <h2>{expenses.length ? 'Expenses' : 'There are no expenses yet'}</h2>
        {expenses.map( expense => (
          <Expense 
            key={expense.id}
            expense={expense}
            setEditExpense={setEditExpense}
            eraseExpense={eraseExpense}
            />
        ))}
    </div>
  )
}

export default ExpenseListing
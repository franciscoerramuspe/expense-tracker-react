import React from 'react'
import Expense from './Expense'


const ExpenseListing = ({
  expenses, 
  setEditExpense, 
  eraseExpense,
  filter,
  filteredExpenses
  }) => {
  return (
    <div className='listado-gastos contenedor'>
        
        

        {
          filter ? (
            <>
              <h2>{filteredExpenses.length ? 'Expenses' : 'There are no expenses yet'}</h2>
              {filteredExpenses.map( expense => (
                <Expense 
                  key={expense.id}
                  expense={expense}
                  setEditExpense={setEditExpense}
                  eraseExpense={eraseExpense}
                  />
              ))}
            </>
          ) : (
            <>
              <h2>{expenses.length ? 'Expenses' : 'There are no expenses yet'}</h2>
              {expenses.map( expense => (
                <Expense 
                  key={expense.id}
                  expense={expense}
                  setEditExpense={setEditExpense}
                  eraseExpense={eraseExpense}
                  />
              ))}
            </>
          )
        }

    </div>
  )
}

export default ExpenseListing
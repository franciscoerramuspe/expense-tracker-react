import React from 'react'

const ExpenseListing = ({gastos}) => {
  return (
    <div className='listado-gastos contenedor'>
        <h2>{gastos.length ? 'Expenses' : 'There are no expenses yet'}</h2>
    </div>
  )
}

export default ExpenseListing
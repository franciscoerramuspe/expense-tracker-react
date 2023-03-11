import React from 'react'
import { formatDate } from '../helpers';

const Expense = ({expense}) => {
  const { category, name, price, id, date } = expense;
  return (
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
            <div className='descripcion-gasto'>
                <p className='categoria'>{category}</p>
                <p className="nombre-gasto">{name}</p>
                <p className="fecha-gasto">
                  Added in: {''}
                  <span>{formatDate(date)}</span>
                </p>
            </div>
        </div>
        <p className="cantidad-gasto">${price}</p>
    </div>
  )
}

export default Expense
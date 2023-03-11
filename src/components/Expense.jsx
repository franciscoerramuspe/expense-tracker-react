import React from 'react'
import { formatDate } from '../helpers';
import SavingsIcon from '../img/icono_ahorro.svg'
import HouseIcon from '../img/icono_casa.svg'
import ExpenseIcon from '../img/icono_gastos.svg'
import FoodIcon from '../img/icono_comida.svg'
import LeisureIcon from '../img/icono_ocio.svg'
import HealthIcon from '../img/icono_salud.svg'
import SubscriptionsIcon from '../img/icono_suscripciones.svg'

const iconDictionary = {
  Savings : SavingsIcon,
  Food : FoodIcon,
  Housing : HouseIcon,
  Leisure : LeisureIcon,
  Health : HealthIcon,
  Suscriptions : SubscriptionsIcon,
  Others : ExpenseIcon
}

const Expense = ({expense}) => {
  const { category, name, price, id, date } = expense;
  return (
    <div className='gasto sombra'>
        <div className='contenido-gasto'>
          <img
            src={iconDictionary[category]}
            alt="Expense Icon" 

          />
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
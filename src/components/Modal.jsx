import React from 'react'
import CloseBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal}) => {

    const hideModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }
    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img src={CloseBtn} 
                    alt="Close modal"
                    onClick={hideModal} 
                />
            </div>

            {/* class name is formulario, and if animarModal is true, add animar as className, else add cerrar*/}
            <form className={`formulario ${animarModal ? "animar" : 'cerrar' }`}>
                <legend>New Expense</legend>
                <div className='campo'>
                    <label htmlFor="nombre">Expense Name</label>

                    <input 
                        type="text"
                        placeholder='Add the name of the expense'
                        id="nombre"
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Quantity</label>

                    <input 
                        type="number"
                        placeholder='Add the amount of the expense'
                        id="cantidad"
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="categoria">Category</label>

                    <select id="categoria">
                        <option value="">-- Select --</option>
                        <option value="ahorro">Savings</option>
                        <option value="comida">Food</option>
                        <option value="casa">Housing</option>
                        <option value="ocio">Leisure</option>
                        <option value="salud">Health</option>
                        <option value="suscripciones">Suscriptions</option>
                        <option value="gastos">Others</option>



                    </select>
                </div>
            
                <input type="submit" 
                    value="Add expense"
                />
            </form>
        </div>
  )
}

export default Modal
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
            </form>
        </div>
  )
}

export default Modal
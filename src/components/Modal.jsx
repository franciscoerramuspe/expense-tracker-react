import { useState } from 'react'
import Message from './Message'
import CloseBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal, saveExpense}) => {

    const [message, setMessage] = useState('')

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [category, setCategory] = useState('')


    const [expense, setExpense] = useState([])

    const hideModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = e =>  {
        e.preventDefault();

        if([nombre, categoria, categoria].includes('')) {
            setMessage("All the inputs are required")

            setTimeout(() => {
                setMessage('')
            }, 3000)
            return
        }
        saveExpense({nombre, cantidad, categoria})
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
            <form 
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : 'cerrar' }`}
            >
                <legend>New Expense</legend>
                {message && <Message tipo="error">{message}</Message>}
                <div className='campo'>
                    <label htmlFor="nombre">Expense Name</label>

                    <input 
                        type="text"
                        placeholder='Add the name of the expense'
                        id="nombre"
                        value={nombre}
                        onChange= {e => setNombre(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Quantity</label>

                    <input 
                        type="number"
                        placeholder='Add the amount of the expense'
                        id="cantidad"
                        value={cantidad}
                        onChange= {e => setCantidad(Number(e.target.value))}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="categoria">Category</label>
                    

                    <select id="categoria"
                        value={category}
                        onChange= {e => setCategory(e.target.value)}
                        >
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
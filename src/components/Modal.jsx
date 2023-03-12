import { useState, useEffect } from 'react'
import Message from './Message'
import CloseBtn from '../img/cerrar.svg'

const Modal = ({
    setModal, 
    animarModal,
    setAnimarModal,
    saveExpense,
    editExpense,
    setEditExpense
    }) => {

    const [message, setMessage] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')
    const [id, setId] = useState('')

    const [expense, setExpense] = useState([])
    
    useEffect(() => {
        if( Object.keys(editExpense).length > 0 ) {
            setName(editExpense.name)
            setPrice(editExpense.price)
            setCategory(editExpense.category)
            setId(editExpense.id)
            setDate(editExpense.date)
          }
    }, []);

    const hideModal = () => {
        setAnimarModal(false)
        setEditExpense({})
        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    const handleSubmit = e =>  {
        e.preventDefault();

        if([name, price, category].includes('')) {
            setMessage("All the inputs are required")

            setTimeout(() => {
                setMessage('')
            }, 3000)
            return
        }
        saveExpense({name, price, category, id, date})
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
                <legend>{editExpense.name ? 'Edit Expense' : 'New Expense'}</legend>
                {message && <Message tipo="error">{message}</Message>}
                <div className='campo'>
                    <label htmlFor="nombre">Expense Name</label>

                    <input 
                        id="nombre"
                        type="text"
                        placeholder='Add the name of the expense'
                        value={name}
                        onChange= {e => setName(e.target.value)}
                    />
                </div>
                <div className='campo'>
                    <label htmlFor="cantidad">Price</label>

                    <input 
                        type="number"
                        placeholder='Add the amount of the expense'
                        id="cantidad"
                        value={price}
                        onChange= {e => setPrice(Number(e.target.value))}
                    />
                </div>

                <div className='campo'>
                    <label htmlFor="categoria">Category</label>
                    

                    <select id="categoria"
                        value={category}
                        onChange= {e => setCategory(e.target.value)}
                        >
                        <option value="">-- Select --</option>
                        <option value="Savings">Savings</option>
                        <option value="Food">Food</option>
                        <option value="Housing">Housing</option>
                        <option value="Leisure">Leisure</option>
                        <option value="Health">Health</option>
                        <option value="Suscriptions">Suscriptions</option>
                        <option value="Others">Others</option>



                    </select>
                </div>
            
                <input type="submit" 
                    value={editExpense.name ? 'Save Changes' : 'Add Expense'}
                />
            </form>
        </div>
  )
}

export default Modal
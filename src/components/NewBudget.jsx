import { useState } from 'react'
import Message from './Message';

const NewBudget = ({ presupuesto, 
    setPresupuesto, 
    setIsValidBudget }) => {

    const [message, setMessage] = useState('');

    const handleBudget = (e) => {
        e.preventDefault();
        
        if(!presupuesto || presupuesto < 0) {
            setMessage("not a valid budget")
            return
        } 
        setMessage('')
        setIsValidBudget(true)


    }

    return (
        <div className='contenedor-presupuesto contenedor sombra'>
        <form onSubmit={handleBudget} className='formulario'>
                <div className='campo'>
                    <label>Establish budget</label>
                    <input 
                        className='nuevo-presupuesto'
                        type="text"
                        placeholder='Add yur budget'
                        value={presupuesto}
                        onChange={ e => setPresupuesto(Number(e.target.value)) }
                    />
                </div>
                <input
                    type="submit"
                    value="Add"
                    />
                {message && <Message tipo="error">{message}</Message>}
        </form>
        </div>
        
    )
}

export default NewBudget
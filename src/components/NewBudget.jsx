import { useState } from 'react'
import Message from './Message';

const NewBudget = ({ presupuesto, setPresupuesto }) => {

    const [message, setMessage] = useState('');

    const handleBudget = (e) => {
        e.preventDefault();
        
        if(!Number(presupuesto) || Number(presupuesto) < 0) {
            setMessage("not a valid budget")
        } else {
            ("number")
        }
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
                        onChange={ e => setPresupuesto(e.target.value) }
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
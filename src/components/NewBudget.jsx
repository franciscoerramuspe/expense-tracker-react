import React from 'react'

const NewBudget = () => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
       <form className='formulario'>
            <div className='campo'>
                <label>Establish budget</label>
                <input 
                    className='nuevo-presupuesto'
                    type="text"
                    placeholder='Add yur budget'
                />
            </div>
            <input
                type="submit"
                value="Add"
                />
       </form>
    </div>
    
  )
}

export default NewBudget
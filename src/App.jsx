import { useState } from 'react'
import Header from './components/Header'
import IconNewExpense from './img/nuevo-gasto.svg'
import Modal from './components/Modal';

function App() {
  
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)


  const handleNewBudget = () => {
    setModal(true)
    
    
    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }
  return (
    <div>
      <Header
        presupuesto = {presupuesto}
        setPresupuesto = {setPresupuesto}
        isValidBudget = {isValidBudget}
        setIsValidBudget = {setIsValidBudget}

      />

      {isValidBudget && (
        <div className='nuevo-gasto'>
          <img 
            src={IconNewExpense}
            alt='Icon new expense'
            onClick={handleNewBudget}
            />
      </div>
      )}
      
      {modal && 
      <Modal   
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal = {setAnimarModal}
        />}

    </div>
  )
}

export default App

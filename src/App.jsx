import { useState } from 'react'
import Header from './components/Header'
import ExpenseListing from './components/ExpenseListing';
import { generateId } from './helpers';
import IconNewExpense from './img/nuevo-gasto.svg'
import Modal from './components/Modal';

function App() {
  
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastos, setGastos] = useState([])

  const handleNewBudget = () => {
    setModal(true)
    
    
    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  const saveExpense = gasto => {
    gasto.id = generateId();
    {/* adding the new expense to the history of expenses */}
    setGastos([...gastos, gasto])

    setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
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
        <>
        <main>
          <ExpenseListing 
            gastos={gastos}
          />
        </main>
          <div className='nuevo-gasto'>
            <img 
              src={IconNewExpense}
              alt='Icon new expense'
              onClick={handleNewBudget}
              />
          </div>
        </>
        
      )}
      
      {modal && 
      <Modal   
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal = {setAnimarModal}
        saveExpense={saveExpense}
        />}

    </div>
  )
}

export default App

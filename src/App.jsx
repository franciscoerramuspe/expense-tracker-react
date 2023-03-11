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

  const [expenses, setExpenses] = useState([])

  const handleNewBudget = () => {
    setModal(true)
    
    
    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  const saveExpense = expense => {
    expense.id = generateId();
    expense.date = Date.now();
    {/* adding the new expense to the history of expenses */}
    setExpenses([...expenses, expense])

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
            expenses={expenses}
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

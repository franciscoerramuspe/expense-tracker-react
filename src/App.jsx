import { useState, useEffect } from 'react'
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

  const [editExpense, setEditExpense] = useState ({})
  
  useEffect(() => {
    if( Object.keys(editExpense).length > 0 ) {
      setModal(true)
    
      setTimeout(() => {
        setAnimarModal(true)
      }, 500);
    }
  }, [ editExpense ])

  const handleNewBudget = () => {
    setModal(true)
    setEditExpense({})
    
    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

  const saveExpense = expense => {
    if(expense.id) {
      const updatdedExpenses = expenses.map( expenseState => expenseState.id === expense.id ? expense : expenseState)
      setExpenses(updatdedExpenses)
    } else {
      expense.id = generateId();
      expense.date = Date.now();
      {/* adding the new expense to the history of expenses */}
      setExpenses([...expenses, expense])
    }
    setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        }, 500);
  }

  return (
    <div className= {modal ? 'fijar' : ''}>
      <Header
        expenses = {expenses}
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
            setEditExpense={setEditExpense}
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
        editExpense={editExpense}
        />}

    </div>
  )
}

export default App

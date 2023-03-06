import { useState } from 'react'
import Header from './components/Header'
import IconNewExpense from './img/nuevo-gasto.svg'


function App() {
  
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false)

  const handleNewBudget = () => {
    console.log('hol')
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
      
    </div>
  )
}

export default App

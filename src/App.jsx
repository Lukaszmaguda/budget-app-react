import React, { useState } from 'react'
import "./App.css"
import Balance from './components/Balance'
import Header from './components/Header/Header'
import TransactionList from './components/TransactionList'
import Chart from './components/Charts/Chart'

function App(){
  
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
      <section>
        <Header />
        <Balance transactions={transactions}/>
        <TransactionList transactions={transactions} onAddTransaction={handleAddTransaction} />
        <Chart transactions={transactions}/>
      </section>
    </div>
  )
}

export default App
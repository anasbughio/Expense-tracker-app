import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import './App.css';

// Initial state for demonstration/mock data
const initialState = [
  { id: 1, text: 'fhfhf', amount: -100 },
  { id: 2, text: 'gdg', amount: 353 },
];

const App = () => {
  // Load transactions from localStorage or use initial state
  const [transactions, setTransactions] = useState(() => {
    const localData = localStorage.getItem('transactions');
    return localData ? JSON.parse(localData) : initialState;
  });

  // Save transactions to localStorage whenever the state changes
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);


  // Calculate totals
  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0);


  // Action handlers
  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const addTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };


  return (
    <div className="app-container">
      <Header />
      <div className="container">
        <Balance balance={total} />
        <IncomeExpenses income={income} expense={expense} />
        <TransactionList 
          transactions={transactions} 
          onDelete={deleteTransaction} 
        />
        <AddTransaction onAdd={addTransaction} />
      </div>
    </div>
  );
};

export default App;
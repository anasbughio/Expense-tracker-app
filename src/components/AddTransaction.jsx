import React, { useState } from 'react';

const AddTransaction = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text || amount === 0) {
      alert('Please enter a description and a valid amount.');
      return;
    }

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount, // Convert string to number
    };

    onAdd(newTransaction);

    // Clear form
    setText('');
    setAmount(0);
  };

  return (
    <div className="add-transaction-container">
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input 
            type="text" 
            id="text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} 
            placeholder="Enter text..." 
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input 
            type="number" 
            id="amount" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="Enter amount..." 
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
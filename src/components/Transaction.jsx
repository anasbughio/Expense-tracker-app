import React from 'react';

const Transaction = ({ transaction, onDelete }) => {
  const sign = transaction.amount < 0 ? '-' : '+';
  const itemClass = transaction.amount < 0 ? 'minus' : 'plus';

  return (
    <li className={itemClass}>
      <button 
        className="delete-btn" 
        onClick={() => onDelete(transaction.id)}
      >
        <span role="img" aria-label="cross">❌</span>
      </button>
      {transaction.text} 
      <span>
        {sign}{Math.abs(transaction.amount).toFixed(2)}
      </span>
    </li>
  );
};

export default Transaction;
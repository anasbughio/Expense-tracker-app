import React from 'react';

const Balance = ({ balance }) => {
  // Format balance as currency
  const sign = balance < 0 ? '-' : '';
  const formattedBalance = Math.abs(balance).toFixed(2);

  return (
    <div className="balance-container">
      <h4>YOUR BALANCE</h4>
      <h1>{sign}${formattedBalance}</h1>
    </div>
  );
};

export default Balance;
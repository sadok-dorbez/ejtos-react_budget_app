import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Currency from './Currency'; // Import the Currency component

const ExpenseTotal = () => {
  const { expenses } = useContext(AppContext);
  const [selectedCurrency, setSelectedCurrency] = useState('£'); // Default currency set to Pound (£)


  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className='alert alert-primary'>
      
      <span>Spent so far: {selectedCurrency}{totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;

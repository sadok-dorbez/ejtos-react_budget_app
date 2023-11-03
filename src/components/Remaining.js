import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = ({ selectedCurrency }) => {
    const { expenses, budget } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const remainingBudget = budget - totalExpenses;
    const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

    return (
        <div className={`alert ${alertType}`}>
            <span>Remaining: {selectedCurrency}{remainingBudget}</span>
        </div>
    );
};

export default Remaining;

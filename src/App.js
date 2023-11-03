import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';
import { AppProvider } from './context/AppContext';

const App = () => {
    const [selectedCurrency, setSelectedCurrency] = useState('£');

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                <div className='row mt-3'>
                    <div className='col-sm'>
                    <Budget selectedCurrency={selectedCurrency}  />
                    </div>
                    <div className='col-sm'>
                        <Remaining selectedCurrency={selectedCurrency}/>
                    </div>
                    <div className='col-sm'>
                        <ExpenseTotal selectedCurrency={selectedCurrency} />
                    </div>
                    <div className='col-sm'>
                        <Currency onChange={handleCurrencyChange} />
                    </div>
                </div>
                <h3 className='mt-3'>Allocation</h3>
                <div className='row '>
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>
                </div>
                <h3 className='mt-3'>Change allocation</h3>
                <div className='row mt-3'>
                    <div className='col-sm'>
                        <AllocationForm selectedCurrency={selectedCurrency} />
                    </div>
                </div>
                {/* Add AllocationForm component here */}
            </div>
        </AppProvider>
    );
};

export default App;

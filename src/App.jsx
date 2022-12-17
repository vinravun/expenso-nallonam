import React, { useState } from 'react';

import { ExpensesContext } from './contexts/ExpensesContext';
import expensesData from './expensesData';

import TotalExpense from './components/TotalExpense';
import ExpensesList from './components/ExpensesList';
import AddExpense from './components/AddExpense';

import './App.css';

function App() {
    const [expenses, setExpenses] = useState(expensesData);

    return (
        <ExpensesContext.Provider value={expenses}>
            <div className="h-screen grid place-content-center bg-blue-200">
                <div className="container w-[480px] rounded-lg shadow-lg p-8 text-center bg-white">
                    <TotalExpense />
                    <ExpensesList setExpenses={setExpenses} />
                    <AddExpense setExpenses={setExpenses} />
                </div>
            </div>
        </ExpensesContext.Provider>
    );
}

export default App;

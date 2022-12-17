import React from 'react';

import { ExpensesProvider } from './contexts/ExpensesContext';
// import expensesData from './expensesData';

import TotalExpense from './components/TotalExpense';
import ExpensesList from './components/ExpensesList';
import AddExpense from './components/AddExpense';

import './App.css';

function App() {
    return (
        <ExpensesProvider>
            <div className="h-screen grid place-content-center bg-blue-200">
                <div className="container w-[480px] rounded-lg shadow-lg p-8 text-center bg-white">
                    <TotalExpense />
                    <ExpensesList />
                    <AddExpense />
                </div>
            </div>
        </ExpensesProvider>
    );
}

export default App;

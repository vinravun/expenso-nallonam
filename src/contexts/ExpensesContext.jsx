import React, { useState, useContext } from 'react';
import expensesData from '../expensesData';

const ExpensesContext = React.createContext();
const ExpensesUpdate = React.createContext();

export function useExpensesData() {
    return useContext(ExpensesContext);
}

export function useSetExpenses() {
    return useContext(ExpensesUpdate);
}

export function ExpensesProvider({ children }) {
    const [expenses, setExpenses] = useState(expensesData);

    return (
        <ExpensesContext.Provider value={expenses}>
            <ExpensesUpdate.Provider value={setExpenses}>
                {children}
            </ExpensesUpdate.Provider>
        </ExpensesContext.Provider>
    );
}

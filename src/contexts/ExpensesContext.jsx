import React, { useState, useContext } from 'react';
import expensesData from '../expensesData';

export const ExpensesContext = React.createContext();
const ExpensesUpdate = React.createContext();

export function useExpensesData() {
    return useContext(ExpensesContext);
}

export function ExpensesProvider({ children }) {
    const [expenses, setExpenses] = useState(expensesData);

    return (
        <ExpensesContext.Provider value={{ expenses, setExpenses }}>
            {children}
        </ExpensesContext.Provider>
    );
}

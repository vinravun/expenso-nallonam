import React, { useContext } from 'react';

import { ExpensesContext } from '../contexts/ExpensesContext';

function TotalExpense() {
    const expenses = useContext(ExpensesContext);

    const amountArray = expenses.map(({ amount }) => +amount);
    const total = amountArray.reduce((sum, num) => sum + num, 0);

    return <p className="text-3xl font-medium mb-5">{total}</p>;
}

export default TotalExpense;

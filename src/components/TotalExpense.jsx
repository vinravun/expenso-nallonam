import React from 'react';

import { useExpensesData } from '../contexts/ExpensesContext';

function TotalExpense() {
    const amountArray = useExpensesData().expenses.map(({ amount }) => +amount);
    const total = amountArray.reduce((sum, num) => sum + num, 0);

    return <p className="text-3xl font-medium border-b pb-5 mb-5">{total}</p>;
}

export default TotalExpense;

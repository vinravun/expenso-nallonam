import React from 'react';
import Parser from 'html-react-parser';

import { useExpensesData } from '../contexts/ExpensesContext';
import { categories } from '../expensesData';

function ExpensesList() {
    const { expenses, setExpenses } = useExpensesData();

    function deleteExpense(id) {
        const currentExpenses = [...expenses];
        currentExpenses.splice(id, 1);

        setExpenses([...currentExpenses]);
    }

    return (
        <ul className="border-b pb-5 mb-5">
            {expenses.map((data) => (
                <li
                    key={`data-${data.id}`}
                    className="flex gap-5 justify-between leading-none mb-3 last:mb-0"
                >
                    <span className="flex">
                        <span>{Parser(categories[data.category].icon)}</span>
                        <span className="ml-2">{data.amount}</span>
                    </span>
                    <button
                        type="button"
                        onClick={() => deleteExpense(expenses.indexOf(data))}
                    >
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 16 16"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" />
                            <path
                                fillRule="evenodd"
                                d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </li>
            ))}
        </ul>
    );
}

export default ExpensesList;

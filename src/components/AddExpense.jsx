import React, { useRef } from 'react';
// import PropTypes from "prop-types";
import { useExpensesData, useSetExpenses } from '../contexts/ExpensesContext';

function AddExpense() {
    const amountRef = useRef(null);
    const detailsRef = useRef(null);

    function addExpense() {
        const newExpense = {
            amount: amountRef.current.value,
            details: detailsRef.current.value,
        };

        useSetExpenses([...useExpensesData(), newExpense]);

        amountRef.current.value = '';
        detailsRef.current.value = '';
    }

    return (
        <div className="flex gap-5 justify-between">
            <div className="flex gap-2 flex-1">
                <input
                    type="number"
                    placeholder="Add amount"
                    className="w-1/3 border rounded-lg p-2"
                    ref={amountRef}
                />
                <input
                    type="text"
                    placeholder="Add details"
                    className="w-2/3 border rounded-lg p-2"
                    ref={detailsRef}
                />
            </div>
            <button
                type="button"
                className="border p-2 rounded-lg"
                onClick={addExpense}
            >
                <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="none"
                        stroke="#000"
                        strokeWidth="2"
                        d="M12,22 L12,2 M2,12 L22,12"
                    />
                </svg>
            </button>
        </div>
    );
}

AddExpense.propTypes = {};

export default AddExpense;

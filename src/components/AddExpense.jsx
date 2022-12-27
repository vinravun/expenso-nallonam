import React, { useRef, useState } from 'react';
// import PropTypes from "prop-types";
import Parser from 'html-react-parser';
import { useExpensesData } from '../contexts/ExpensesContext';
import { categories } from '../expensesData';

function AddExpense() {
    const amountRef = useRef(null);
    const [current, setCurrent] = useState(Object.keys(categories)[0]);
    const { expenses, setExpenses } = useExpensesData();

    function addExpense() {
        const newExpense = {
            amount: amountRef.current.value,
            category: current,
        };

        setExpenses([...expenses, newExpense]);

        amountRef.current.value = '';
    }

    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-1">
                <input
                    type="number"
                    placeholder="How much did you spend?"
                    className="border rounded-lg p-2"
                    ref={amountRef}
                />
                <Categories current={current} setCurrent={setCurrent} />
            </div>
            <button
                type="button"
                className="p-2 rounded-lg"
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

function Categories({ current, setCurrent }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                type="button"
                aria-label={current}
                className="border rounded-lg p-3"
                onClick={() => setOpen(!open)}
            >
                {Parser(categories[current].icon)}
            </button>

            {open ? (
                <ul className="absolute top-full border w-full p-3 rounded-lg bg-white">
                    {Object.keys(categories).map((category, i) => (
                        <li key={`category-${i}`} className="mb-2 last:mb-0">
                            <button
                                type="button"
                                aria-label={category}
                                onClick={() => {
                                    setCurrent(category);
                                }}
                            >
                                <span className="pointer-events-none">
                                    {Parser(categories[category].icon)}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}

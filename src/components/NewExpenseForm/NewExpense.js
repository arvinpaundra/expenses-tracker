import React, { useState } from 'react';
import FormExpense from './FormExpense';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expense);

    setIsExpand(false);
  };

  const [isExpand, setIsExpand] = useState(false);

  const expandFormHandler = () => {
    setIsExpand(true);
  };

  const onCancelHandler = () => {
    setIsExpand(false);
  };

  return (
    <div className="new-expense">
      {!isExpand && <button onClick={expandFormHandler}>Add new expense</button>}
      {isExpand && <FormExpense onSaveExpenseData={saveExpenseDataHandler} onCancel={onCancelHandler} />}
    </div>
  );
};

export default NewExpense;

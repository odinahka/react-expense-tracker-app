import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import '../Buttons.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData, id : Math.random().toString()
        };
        props.onAddExpense(expenseData);
    } 
    const defaultContentClickHandler = () => setReturnValue(
        <ExpenseForm setReturnValue = {setReturnValue} defaultContent = {defaultContent} onSaveExpenseData = {saveExpenseDataHandler}/>)
    const defaultContent = <button onClick = {defaultContentClickHandler} className = "button-style">Add New Expense</button>
    const [returnValue, setReturnValue] = useState(defaultContent)

return <div className = "new-expense">
    {returnValue}
</div>
}
export default NewExpense;
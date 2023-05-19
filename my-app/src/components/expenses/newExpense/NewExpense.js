import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import { useState } from 'react'

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false)

    const saveExpenseDataHandler = (enteredExpenseData) => {
        setShowForm(false)

        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    const canShow = () => {
        setShowForm(true)
    }

    const cancelNew = () => {
        setShowForm(false)
    }

    if (showForm) {
        return (
            <div className='new-expense'>
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClickCancel={cancelNew} />
            </div>
        )
    }

    return (
        <div className='new-expense'>
            <button type='button' onClick={canShow}> Add new expense </button>
        </div>
    )
}

export default NewExpense
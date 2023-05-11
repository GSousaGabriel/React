import './newExpense.css'
import ExpenseForm from './expenseForm'

const newExpense = (props) => {
    const saveExpenseDataHandler= (enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default newExpense
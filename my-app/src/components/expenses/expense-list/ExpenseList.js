import './ExpenseList.css'
import ExpenseItem from "../ExpenseItem"

const ExpenseList = props => {
    if (props.data.length === 0) {
        return <h2 className='expenses-list__fallback'>No expenses Found.</h2>
    }

    return (
        <ul className='expenses-list'>
            {
                props.data.map(expense => (
                    <li>
                        <ExpenseItem key={expense.id} title={expense.title} price={expense.amount} date={expense.date}></ExpenseItem>
                    </li>
                ))
            }
        </ul>
    )
}

export default ExpenseList
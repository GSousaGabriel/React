import './expenseItem.css'
import ExpenseDate from './expenseDate'
import Card from '../UI/card'

function ExpenseItem(props) {

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem
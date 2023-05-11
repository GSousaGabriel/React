import { useState } from 'react'
import './expenseItem.css'
import ExpenseDate from './expenseDate'
import Card from '../UI/card'

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle("daskjdka")
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem
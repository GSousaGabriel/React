import { useState } from "react"
import ExpenseItem from "./expenseItem"
import ExpenseFilter from "./expense-filter/expenseFilter"
import Card from "../UI/card"
import './expenses.css'

function newComponentItem(props) {
    const [filterValue, setFilterValue] = useState('2019')
    let data = props.data
    let printData = <p>No expenses Found.</p>

    const chooseFilterHandler = filter => {
        setFilterValue(filter)
    }

    data = data.filter(expense => expense.date.getFullYear() === +filterValue)
    
    if (data.length > 0) {
        printData = data.length > 0 &&
            data.map(expense => (
                <ExpenseItem key={expense.id} title={expense.title} price={expense.amount} date={expense.date}></ExpenseItem>
            ))
    }

    return (
        <Card className='expenses'>
            <ExpenseFilter onChooseFilter={chooseFilterHandler} filteredYear={filterValue}></ExpenseFilter>
            {printData}
        </Card>
    )
}

export default newComponentItem
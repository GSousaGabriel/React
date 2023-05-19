import { useState } from "react"
import ExpenseFilter from "./expense-filter/ExpenseFilter"
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesList from "./expense-list/ExpenseList"

function Expenses(props) {
    const [filterValue, setFilterValue] = useState('2019')
    let data = props.data

    const chooseFilterHandler = filter => {
        setFilterValue(filter)
    }

    data = data.filter(expense => expense.date.getFullYear() === +filterValue)

    return (
        <Card className='expenses'>
            <ExpenseFilter onChooseFilter={chooseFilterHandler} filteredYear={filterValue}></ExpenseFilter>
            <ExpensesList data={data} />
        </Card>
    )
}

export default Expenses
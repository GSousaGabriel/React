import { useState } from "react"
import ExpenseFilter from "./expense-filter/ExpenseFilter"
import Card from "../UI/Card"
import './Expenses.css'
import ExpensesList from "./expense-list/ExpenseList"
import ExpensesChart from "./ExpensesChart"

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
            <ExpensesChart expenses={data}/>
            <ExpensesList data={data} />
        </Card>
    )
}

export default Expenses
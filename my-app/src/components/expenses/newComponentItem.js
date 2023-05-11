import { useState } from "react"
import ExpenseItem from "./expenseItem"
import ExpenseFilter from "./expense-filter/expenseFilter"
import Card from "../UI/card"
import './expenses.css'

function newComponentItem(props){  
    const [filterValue, setFilterValue]= useState('2019')  
    const chooseFilterHandler= filter => setFilterValue(filter)

    return(
        <Card className= 'expenses'>
            <ExpenseFilter onChooseFilter={chooseFilterHandler} filteredYear={filterValue}></ExpenseFilter>
            <ExpenseItem title={props.data[0].title} price={props.data[0].amount} date={props.data[0].date}></ExpenseItem>
            <ExpenseItem title={props.data[1].title} price={props.data[1].amount} date={props.data[1].date}></ExpenseItem>
            <ExpenseItem title={props.data[2].title} price={props.data[2].amount} date={props.data[2].date}></ExpenseItem>
            <ExpenseItem title={props.data[3].title} price={props.data[3].amount} date={props.data[3].date}></ExpenseItem>
        </Card>
        )
}

export default newComponentItem
import { useState } from 'react'
import './expenseForm.css'

const expenseForm = (props) => {
    const [enteredTitle, setenteredTitle] = useState('')
    const [enteredAmount, setenteredAmount] = useState('')
    const [enteredDate, setenteredDate] = useState('')

    const inputChangeHandler = (event) => {
        if(event.target.id==="title"){
            setenteredTitle(event.target.value)
        }else if(event.target.id==="amount"){
            setenteredAmount(event.target.value)
        }else if(event.target.id==="date"){
            setenteredDate(event.target.value)
        }
    }

    // const [userInput, setUserInput]= useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    // const titleChangeHandler = (event)=>{
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredTitle: event.target.value
    //     // })
    //     setUserInput((prevState)=>{
    //         return {
    //             ...prevState,
    //             enteredTitle: event.target.value
    //         }
    //     })
    // }

    // const amountChangeHandler = (event)=>{
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredAmount: event.target.value
    //     // })
    //     setUserInput((prevState)=>{
    //         return {
    //             ...prevState,
    //             enteredAmount: event.target.value
    //         }
    //     })
    // }

    // const dateChangeHandler = (event)=>{
    //     // setUserInput({
    //     //     ...userInput,
    //     //     enteredDate: event.target.value
    //     // })
    //     setUserInput((prevState)=>{
    //         return {
    //             ...prevState,
    //             enteredDate: event.target.value
    //         }
    //     })
    // }

    const submitHandler= (event)=>{
        event.preventDefault()

        const expenseData={
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData)
        setenteredTitle("")
        setenteredAmount("")
        setenteredDate("")
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' name='title' id='title' onChange={inputChangeHandler} value={enteredTitle}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' name='amount' id='amount' min='0.01' step='0.01' onChange={inputChangeHandler} value={enteredAmount}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' name='date' id='date' min='2019-01-01' max='2023-12-31' onChange={inputChangeHandler} value={enteredDate}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'> Add expense </button>
            </div>
        </form>
    )
}

export default expenseForm
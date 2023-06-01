import Input from '../UI/Input/Input'
import classes from './MealItemForm.module.css'
import { useRef, useState } from 'react'

const MealItemForm = props => {
    const amountInputRef= useRef()
    const[amountIsValid, setAmountIsValid]=useState(true)

    const addItemHandler= event=>{
        event.preventDefault()

        const enteredAmount= +amountInputRef.current.value
        if(enteredAmount < 1){
            setAmountIsValid(false)
            return
        }
        props.addItemHandler(enteredAmount)
    }


    return (
        <form className={classes.form} onSubmit={addItemHandler}>
            <Input ref={amountInputRef} label='Amount' input={{
                id: 'amount_' + props.idInput,
                type: 'number',
                min: '1',
                max: '5',
                defaultValue: '1',
                name: 'amount_' + props.idInput
            }}></Input>
            <button type='submit'>+ Add</button>
            {!amountIsValid && <p>Select a valid Amount!</p>}
        </form>
    )
}

export default MealItemForm
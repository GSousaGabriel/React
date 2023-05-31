import Input from '../UI/Input/Input'
import classes from './MealItemForm.module.css'

const MealItemForm = props => {
    return (
        <form className={classes.form}>
            <Input label='Amount' input={{
                id: 'amount_' + props.idInput,
                type: 'number',
                min: '1',
                max: '5',
                defaultValue: '1'
            }}></Input>
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm
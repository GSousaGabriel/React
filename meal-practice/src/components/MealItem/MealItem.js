import { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../store/cart-contex'

const MealItem = props => {
    const ctx= useContext(CartContext)
    const price = `$${props.price.toFixed(2)}`

    const addItem = amount => {
        ctx.addItem({
            id: props.id,
            name:props.name,
            amount,
            price: props.price
        })
    }

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>

            </div>
            <div>
                <MealItemForm idInput={props.id} addItemHandler={addItem} />
            </div>
        </li>
    )
}

export default MealItem
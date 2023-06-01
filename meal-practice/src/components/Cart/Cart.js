import { useContext } from 'react'
import Modal from '../UI/Modal/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-contex'
import CartItem from './CartItem'

const Cart = props => {
    const ctx = useContext(CartContext)

    const cartItems = ctx.items.map(item => {
        const addItemHandler = item => {
            ctx.addItem(item)
        }

        const removeItemHandler = id => {
            ctx.removeItem(id)
        }

        return <CartItem
            id={item.id}
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={addItemHandler}
            onRemove={removeItemHandler} />
    })

    return (
        <Modal>
            <ul className={classes['cart-itens']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${ctx.totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button onClick={props.canShowCart} className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart
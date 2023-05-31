import Modal from '../UI/Modal/Modal'
import classes from './Cart.module.css'

const Cart = props => {
    const cartItems = [{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map(item => { return <li>{item.name}</li> })

    return (
        <Modal>
            <div className={classes.total}>
                <ul className={classes['cart-itens']}>
                    {cartItems}
                </ul>
                <span>Total Amount</span>
                <span>231</span>
                <div className={classes.actions}>
                    <button onClick={props.canShowCart} className={classes['button--alt']}>Close</button>
                    <button className={classes.button}>Order</button>
                </div>
            </div>
        </Modal>
    )
}

export default Cart
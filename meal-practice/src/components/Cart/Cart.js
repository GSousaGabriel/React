import { useContext, useState } from 'react'
import Modal from '../UI/Modal/Modal'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-contex'
import CartItem from './CartItem'
import Checkout from './Checkout'

const Cart = props => {
    const [isCheckout, setIsCheckout] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [didSubmit, setDidSubmit] = useState(false)

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

    const changeCheckoutState = () => {
        setIsCheckout(!isCheckout)
    }

    const submitCheckout = (userData) => {
        setIsSubmitting(true)
        fetch("https://reacthttp-65347-default-rtdb.firebaseio.com/orders.json", {
            method: "POST",
            body: JSON.stringify({
                user: userData,
                order: ctx.items
            })
        })
            .then(success => {
                ctx.clearCart()
                setIsSubmitting(false)
                setDidSubmit(true)
                setTimeout(() => {
                    props.canShowCart()
                }, 2000);
            })
            .catch((e) => {
                console.log(e)
            })
    }

    const modalActions = (
        <div className={classes.actions}>
            <button onClick={props.canShowCart} className={classes['button--alt']}>Close</button>
            <button className={classes.button} onClick={changeCheckoutState} disabled={ctx.items.length === 0 ? true : false}>Order</button>
        </div>)

    const cartModalContent = (
        <>
            <ul className={classes['cart-itens']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${ctx.totalAmount}</span>
            </div>
            {isCheckout && <Checkout onCancel={changeCheckoutState} onSubmit={submitCheckout} />}
            {!isCheckout && modalActions}
        </>
    )

    return (
        <Modal>
            {isSubmitting ? 'Sending the order...' : cartModalContent}
            {didSubmit && 'Order Submitted!'}
        </Modal>
    )
}

export default Cart
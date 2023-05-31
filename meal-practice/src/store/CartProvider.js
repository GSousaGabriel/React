import CartContext from './cart-contex'

const CartProvider = props => {
    const addItemToCartHandler = item => { }
    const removeItemFromCartHandler = item => { }

    const cartContext = {
        itens: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
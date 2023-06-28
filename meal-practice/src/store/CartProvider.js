import { useReducer } from 'react'
import CartContext from './cart-contex'

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === "ADD") {
        const updatedTotalAmount =
            state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: +(updatedTotalAmount.toFixed(2))
        }
    }
    if (action.type === "DELETE") {
        const indexItem = state.items.findIndex(item => item.id === action.item)
        const updatedItems = state.items.filter(item => item.id !== action.item)
        const updatedAmount = state.totalAmount - (state.items[indexItem].amount * state.items[indexItem].price)
        return {
            items: updatedItems,
            totalAmount: +(updatedAmount.toFixed(2))
        }
    }

    if (action.type === "DELETE") {
        return defaultCartState
    }

    return defaultCartState
}

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = item => {
        dispatchCartAction({
            type: 'ADD',
            item: item
        })
    }

    const removeItemFromCartHandler = id => {
        dispatchCartAction({
            type: 'DELETE',
            item: id
        })
    }

    const clearCartHandler = id => {
        dispatchCartAction({
            type: 'CLEAR'
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
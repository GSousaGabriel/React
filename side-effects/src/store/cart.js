import { createSlice } from '@reduxjs/toolkit'

const initialCartSlice = { showCart: false, items: [] }

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartSlice,
    reducers: {
        toggleCart(state) {
            state.showCart = !state.showCart
        },
        addItem(state, action) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id)

            if (itemIndex === -1) {
                const item = {
                    id: action.payload.id,
                    title: action.payload.title,
                    quantity: 1,
                    price: action.payload.price,
                    total: action.payload.price
                }

                state.items.push(item)
            } else {
                state.items[itemIndex].quantity++
                state.items[itemIndex].total = state.items[itemIndex].quantity * state.items[itemIndex].price
            }
        },
        removeItem(state, action) {
            const itemIndex = state.items.findIndex(item => item.id === action.payload)

            if (state.items[itemIndex].quantity === 1) {
                delete state.items.splice(itemIndex, 1)
                return
            }

            state.items[itemIndex].quantity--
            state.items[itemIndex].total = state.items[itemIndex].quantity * state.items[itemIndex].price
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer
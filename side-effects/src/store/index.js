import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart'

const reduxStore = configureStore({
    reducer: {
        cartReducer: cartSlice
    }
})

export default reduxStore
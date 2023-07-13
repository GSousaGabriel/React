import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cart'
import notificationSlice from './notification'

const reduxStore = configureStore({
    reducer: {
        cartReducer: cartSlice,
        notificationReducer: notificationSlice
    }
})

export default reduxStore
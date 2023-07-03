// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counter'
import authSlice from './auth'

// const counterReducer = ((state = initialState, action) => {
//     if (action.type === "increment") {
//         return { ...state, counter: state.counter + 1 }
//     } else if (action.type === "decrement") {
//         return { ...state, counter: state.counter - 1 }
//     } else if (action.type === "increase") {
//         return { ...state, counter: state.counter + action.amount }
//     } else if (action.type === "toggle") {
//         return { ...state, showCounter: !state.showCounter }
//     }

//     return state
// })

const reduxStore = configureStore({
    reducer: {
        counterReducer: counterSlice,
        authReducer: authSlice

    }
})

export default reduxStore
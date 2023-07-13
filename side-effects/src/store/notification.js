import { createSlice } from '@reduxjs/toolkit'

const initialNotificationSlice = { notification: null }

const notificationSlice = createSlice({
    name: 'notification',
    initialState: initialNotificationSlice,
    reducers: {
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        },
        hideNotification(state) {
            state.notification = null
        }
    }
})

export const sendCartData = (cartData) => {
    return async (dispatch) => {
        dispatch(notificationActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }))

        const sendRequest = async () => {

            const response = await fetch('https://reacthttp-65347-default-rtdb.firebaseio.com/reduxCart.json', {
                method: 'POST',
                body: JSON.stringify(cartData)
            })

            if (!response.ok) {
                dispatch(notificationActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!'
                }))
                return
            }
        }

        try {
            await sendRequest()

            dispatch(notificationActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Cart data saved!'
            }))
        } catch (e) {
            dispatch(notificationActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }))
        }

        setTimeout(() => {
            dispatch(notificationActions.hideNotification())
        }, 1000);
    }
}

export const notificationActions = notificationSlice.actions
export default notificationSlice.reducer
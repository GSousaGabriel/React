import { cartActions } from "./cart"
import { notificationActions } from "./notification"

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://reacthttp-65347-default-rtdb.firebaseio.com/reduxCart.json')

            if (!response.ok) {
                dispatch(notificationActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: "Couldn't fetch cart data failed!"
                }))
                return
            }
            return await response.json()
        }

        try {
            const cartData = await fetchData()

            dispatch(cartActions.setCart(cartData))

            dispatch(notificationActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Cart data fetched!'
            }))
        } catch (e) {
            dispatch(notificationActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: "Couldn't fetch cart data failed!"
            }))
        }

        setTimeout(() => {
            dispatch(notificationActions.hideNotification())
        }, 1000);
    }
}

export const sendCartData = (cartData) => {
    return async (dispatch) => {
        dispatch(notificationActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }))

        const sendRequest = async () => {

            const response = await fetch('https://reacthttp-65347-default-rtdb.firebaseio.com/reduxCart.json/', {
                method: 'PUT',
                body: JSON.stringify({items: cartData.items})
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
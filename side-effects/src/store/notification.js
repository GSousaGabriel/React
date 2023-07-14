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

export const notificationActions = notificationSlice.actions
export default notificationSlice.reducer
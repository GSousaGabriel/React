import { redirect } from "react-router-dom"

const getTokenE = () => {
    const tokenE = localStorage.getItem('tokenE')
    if (tokenE) {
        const tokenEDate = new Date(atob(tokenE))
        const now = new Date()
        return (tokenEDate.getTime() - now.getTime())
    }
    return null
}

const getAuthToken = () => {
    const token = localStorage.getItem('token')

    if (token) {
        if (getTokenE() < 0) {
            return 'EXPIRED'
        }

        return atob(token)
    }
    return null
}

const tokenLoader = () => {
    return getAuthToken()
}

const checkAuthToken = () => {
    const token = getAuthToken()
    if (token) {
        return null
    }
    return redirect('/auth?mode=login')
}

export default getAuthToken
export { tokenLoader, checkAuthToken, getTokenE }
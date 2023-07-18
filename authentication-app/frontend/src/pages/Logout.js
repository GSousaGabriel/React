import { redirect } from "react-router-dom"

const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('tokenE')
    return redirect('/auth')
}

export default logout
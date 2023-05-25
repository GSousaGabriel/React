import React, { useState, useEffect } from "react"


const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email, password) => { }
})

export const AuthContextProvider = props => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const logged = localStorage.getItem('isLoggedIn')
        
        if (logged) {
            setIsLoggedIn(true)
        }
    }, [])

    const logoutHandler = () => {
        localStorage.removeItem(isLoggedIn)
        setIsLoggedIn(false)
    }

    const loginHandler = () => {
        localStorage.setItem('iaLoggedIn', true)
        setIsLoggedIn(true)
    }

    return (
        <AuthContext.Provider value={
            {
                isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler
            }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext
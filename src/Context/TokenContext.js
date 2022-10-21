import React, { createContext, useState } from 'react'

export const TokenContext = createContext()
const TokenContextProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('tl'))
    const updateToken = (newToken) => {
        setToken(newToken)
        if (newToken != "") {
            localStorage.setItem('tl', newToken)
            localStorage.setItem('user', 5)
        }
    }
    return (
        <TokenContext.Provider value={{ token, setToken: updateToken }}>
            {children}
        </TokenContext.Provider>)
}

export default TokenContextProvider

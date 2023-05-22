import React, { createContext, useContext, useState } from 'react'

export const StateContext = createContext()

export const StateProvider = ({ children }) => {
    const [mode, setMode] = useState('light')

    const handleMode = (mode) => {
        setMode(mode)
        localStorage.setItem('theme', mode)
    }

    return (
        <StateContext.Provider value={{handleMode, mode}}>
            {children}
        </StateContext.Provider>
    )
}

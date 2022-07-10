import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

export const StateProvider = ({ children }) => {
    const [currentColor, setCurrentColor] = useState('red')
    const [currentMode, setCurrentMode] = useState('Light')

    const setMode = (mode) => {
        setCurrentMode(mode)

        localStorage.setItem('themeMode', mode)
    }
    
    const setColor = (color) => {
        setCurrentColor(color)

        localStorage.setItem('colorMode', color)
    }

    return (
        <StateContext.Provider value={{currentColor, currentMode, setMode, setColor}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)

import React, { createContext, useContext, useState } from 'react'
import { setWithKey } from '../utils/local-storage'

const StateContext = createContext()

export const StateProvider = ({ children }) => {
    const [currentColor, setCurrentColor] = useState('E35A44')  
    const [currentMode, setCurrentMode] = useState('Light')
    const [screenSize, setScreenSize] = useState(undefined)
    const [isOpen, setIsOpen] = useState(false)

    const setMode = (mode) => {
        setCurrentMode(mode)
        setWithKey('themeMode', mode)
    }
    
    const setColor = (color) => {
        setCurrentColor(color)
        setWithKey('colorMode', color)
    }

    const toggleSidebar = () => {
        setIsOpen(prevState => !prevState)
    }

    return (
        <StateContext.Provider value={{currentColor, currentMode, setMode, setColor, isOpen, setIsOpen, toggleSidebar, screenSize, setScreenSize}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)

import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

export const StateProvider = ({ children }) => {
    const [screenSize, setScreenSize] = useState(undefined)
    const [isOpen, setIsOpen] = useState(false)

    const toggleOpen = () => {
        setIsOpen(prevState => !prevState)
    }

    return (
        <StateContext.Provider value={{isOpen, setIsOpen, toggleOpen, screenSize, setScreenSize}}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)

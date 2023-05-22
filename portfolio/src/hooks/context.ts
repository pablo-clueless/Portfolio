import { useContext } from 'react'

import { StateContext } from '../contexts/ContextProvider'

export const useStateContext = () => useContext(StateContext)
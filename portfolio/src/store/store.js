import { configureStore } from '@reduxjs/toolkit'

import sidebarReducer from './features/sidebarSlice'
import dataReducer from './features/dataSlice'

export const store = configureStore({
    reducer:{
        sidebar: sidebarReducer,
        data: dataReducer
    }
})
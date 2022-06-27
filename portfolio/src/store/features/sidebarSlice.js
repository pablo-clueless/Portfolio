import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isOpen: false
}

const sidebarSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openSidebar: state => {
            state.isOpen = true
        },
        closeSidebar: state => {
            state.isOpen = false
        },
    }
})

export const { closeSidebar, openSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer
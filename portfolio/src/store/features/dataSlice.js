import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const url = 'https://api.github.com/users/pablo-clueless'

const initialState = {
    data: {},
    isLoading: true,
    error: null
}

export const getGithubData = createAsyncThunk('user/getData', async(_, thunkAPI) => {
    try {
        const res = await fetch(url)
        const data = res.json()
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

const dataSlice = createSlice({
    name: 'data',
    initialState,
    extraReducers:{
        [getGithubData.pending]: state => {
            state.isLoading = true
        },
        [getGithubData.fulfilled]: (state, action) => {
            state.isLoading = false
            state.data = action.payload
        },
        [getGithubData.rejected]: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default dataSlice.reducer
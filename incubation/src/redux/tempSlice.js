import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:''
}

export const tempSlice = createSlice({
    name: 'temp',
    initialState,
    reducers: {
        setValue: (state, action) => {
         
            state.value = action.payload
        },
        clearValue: (state, action) => {
            state.value = ""
        },

    },
})

// Action creators are generated for each case reducer function
export const { clearValue,setValue } = tempSlice.actions

export default tempSlice.reducer
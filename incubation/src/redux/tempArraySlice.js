import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:[]
}

export const tempArraySlice = createSlice({
    name: 'tempArray',
    initialState,
    reducers: {
        setArray: (state, action) => {
         
            state.value = [...action.payload]
        },
        clearArray: (state, action) => {
            state.value =[]
        },

    },
})

// Action creators are generated for each case reducer function
export const { setArray,clearArray } = tempArraySlice.actions

export default tempArraySlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    form: {
        fname: '',
        email: '',
        companyName: '',
        password: ''
    }
}

export const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        addField: (state, action) => {
            state.form = { ...state.form, [action.payload.key]: action.payload.value }
        },
        clearField: (state, action) => {
            state.form = ""
        },

    },
})

// Action creators are generated for each case reducer function
export const { addField,clearField } = signupSlice.actions

export default signupSlice.reducer
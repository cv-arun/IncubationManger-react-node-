import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    form: {
        email: '',
        password: ''
    }
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        loginField: (state, action) => {
            state.form = { ...state.form, [action.payload.key]: action.payload.value }
        },
        clearField: (state, action) => {
            state.form =''
        },

    },
})

// Action creators are generated for each case reducer function
export const { loginField,clearField } = loginSlice.actions

export default loginSlice.reducer
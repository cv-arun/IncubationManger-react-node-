import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token:''
}

export const userSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        userLogin: (state, action) => {
            
            state.token = action.payload
        },
        userLogout: (state, action) => {
            state.token = ""
        },

    },
})

// Action creators are generated for each case reducer function
export const { userLogin,userLogout } = userSlice.actions

export default userSlice.reducer
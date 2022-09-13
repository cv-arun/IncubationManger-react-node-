import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: { }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogin: (state, action) => {
            
            state.user = action.payload
        },
        userLogout: (state, action) => {
            state.user = ""
        },

    },
})

// Action creators are generated for each case reducer function
export const { userLogin,userLogout } = userSlice.actions

export default userSlice.reducer
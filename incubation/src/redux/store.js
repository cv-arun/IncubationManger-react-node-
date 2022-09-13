import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './loginSlice'
import signupReducer from './signupSlice';
import userSlice from './userSlice';

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    login:loginSlice,
    user:userSlice
  },
})
import { configureStore } from '@reduxjs/toolkit'
import loginSlice from './loginSlice'
import signupReducer from './signupSlice';
import userSlice from './userSlice';
import tempSlice from './tempSlice';
import tempArraySlice from './tempArraySlice';

export const store = configureStore({
  reducer: {
    signup: signupReducer,
    login: loginSlice,
    user: userSlice,
    temp: tempSlice,
    tempArray: tempArraySlice
  },
})